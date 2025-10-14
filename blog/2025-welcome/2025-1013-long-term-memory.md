---
slug: long-term-memory
title: Design Long Term Memory in Drawhisper
authors: [gongqing]
---

## LLM Limitations in Long Context Windows
Recenet LLMs (Large Language Models) technology has shown great power on solving intricate problems, complex tasks, and multi-round conversations, especially in reasoning models like Deepseek-R1, GPT-5 and Claude-Opus-4.1. These state-of-the-art models can tackle different kinds of complex works, reaching or even surpassing human expertise level, empowering human experts of specific fields with astonshing efficiency like never before. Recent advanced models show a trending on longer context windows reaching the millions, enabling them to handle long-context conversations and aware of chat histories from early context. However, even the most powerful models are struggling to find the correct 'needle' when there are too much noises in a very long context, leading to unreliable outcomes, which is so called **[context rot](https://research.trychroma.com/context-rot)**. Another problem in practice is that models will lose all context when the user start a new chat session. Moreover, model training requires enormous computation cost and time to iterate, it deposits the knowledge (e.g., the training data) in the model weights once the training process has finished, current LLMs don't have the ability to learn the new knowledge in real-time (that is, during chat session).

<!-- truncate -->

## RAG and Memory Management
To tackle aforementioned drawbacks, researchers designed several systems to augment model's ability. The most commonly used technology of augmenting un-trained knowledge for model is RAG - retrieval augmented generation. With agentic design, the model could use their agentic tools (e.g., retrieval functions) to retrieve most relevant knowledge from a **Vector Database** based on user question, where stores new knowledge which the model has never seen before. Typically, a retrieval method transforms user question into a high dimensional vector utilizing an **embedding model**, then a **similarity algorithm** (e.g., Cosine or Euclidean distance) is used to get the most relevant vectors from the vector database. Later, a re-ranker model can be used to re-rank the best records from multiple candidates. Finally, semantic content stored in the retrieved records can be used as model context to answer the user's question. 

Context lost across different chat histories could use similar methodology to solve, but requires more sophsitcated design in engineering. Recent updates in [ChatGPT](https://help.openai.com/en/articles/8590148-memory-faq) provide memory feature, where you can tell ChatGPT to remember some context explictly, and it will store as memories across all sessions, or, GPT will identify important memory and keep it in mind automatically. This also use RAG mechanism as its memory core with engineering design meticulously under the hood. 

## Context Engineering in Drawhisper
With above fundenmental knowledge in mind, we designed a long-term meomry system (Memory Agent) specifically for our role-play chat app, it generates user-friendly memories while user chat with the character automatically, allowing users to build up a deep bonding with the characters they like.

In general, the agent will generate 1~3 memories when the chat history messages exceeds 2048 tokens (or 20 chat rounds, that is, 40 chat messages). Intuitively, the agent summarize chat history messages meticulously based on a reason model (deepseek-reasoner, in our case, prompts shown below), the temporary summarization will be sent to a memory extractor model and divided into several memory chunks. Each memory chunk presents itself as a structured output in JSON format, consists of title, content and type. We defined 7 memory types to generally cover the role-play chat scenarios, including **conversation**, **important envent**, **preference**, **fact**, **emotion**, **worldbuilding**, and **relationship**, the memory type is identified by memory extractor during generation. Based on the memory chunks, the agent will start embedding the memory content and save the vectors with metadata (like memory source content, character information) into a vector store. After successfully saved the vectors into store, the agent will confidently persist the memory with vector index returned from store to our database, and finally the user can view or edit the memory in our chat client. 

```js
let memory_chunk = {
    title: 'memory title',
    content: 'memory content ...',
    type: 'MEMORY_TYPE'
}
```

To summarize, the process can be represented as 5 steps: 

 - Generate Summarization for Chat History
 - Extract Memory Chunks and Assign Types
 - Generate Embeddings on Memory Source Content
 - Persist embeddings into vector store and save memory in user database
 - Chat Client New Memory Notification

In first two steps, we create a memory chain to summarize and extract memories via [LangChain.js](https://github.com/langchain-ai/langchainjs), a popular agent creation tool developed by LangChain Team, turning trivial chat messages into readable and structured memory. In embedding steps, we use [AWS S3 Vectors](https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/userguide/s3-vectors.html) to manage vector storage and retrieval. The whole process is running automatically and asynchronously in background with no interference on user's chat experience, thanks to our memory agent. 

In chat client, our users can either *pin* the memory to current chat, or *share* the memory to multiple chats which derived from the same character. To expand the character's verisimilitude and versatility, we allow user to create scenes that corresponds to the character, except inherit the fundenmental configuration of the character, scenes also provide detailed role-play stages and scenarios information, augmenting the model's context and providing a better immersive vibe chat experience. During chat, the model's context mainly consists of a latest chat messages history as basic context (short-term memory) and **pinned** or **shared** memories (long-term memory). When user mentioned specific topics, like preference or old story, and the model's context is lack of such knowledge, it will generate an embedding on user input and try retrieve a relative memory from vector store based on similarity search, and use the source memory content as supplementary knowledge to the model's complete context. 

The memory system helps model alleviate the context rot problem, by providing a cleaned memory context for model to generate a more authentic response to user. We will provide a detailed technical report on the performance of model responses after enough chat message data, stay tune by registering in [Drawhisper](https://www.drawhisper.com)!


