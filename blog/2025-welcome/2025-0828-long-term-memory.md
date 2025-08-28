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
With above fundenmental knowledge in mind, we designed a long-term meomry system specifically for our role-play chat app


