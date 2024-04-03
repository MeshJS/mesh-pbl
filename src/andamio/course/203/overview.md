---
{
  "title": "Module 203 Overview - MeshTxBuilder",
  "slt": ["203.1", "203.2", "203.3", "203.4", "203.5", "203.6", "203.7"],
  "type": "ModuleOverview",
  "description": "Advanced Topics",
  "videoURL": "",
  "lastEdited": "27 Feb 2024",
  "author": "Write: Leon, Review: Hinson",
}
---

### Introduction to Module 203

In this module, you will learn how to build the transaction similar to the ones in the [previous module](/course/module/200/overview), but utilizing the lower level transaction building method. Mesh provides `MeshTxBuilder`, a useful set of lower level APIs, allowing developers to build transactions with more flexibility and control.

The `MeshTxBuilder` is designed to be a loosely-coupled component. On one hand it could be work nicely with existing MeshJS components such as fetcher and evaluator instances. On another hand, it could be a standalone component just to handle the necessary Cardano transaction building process without the need in knowing every technical details.

With such design principle in mind, `MeshTxBuilder` would work for both client side (application frontend) transaction and server side (application backend) transaction building. In this module, we will cover both aspects.

### Resources

To learn more about the MeshTxBuilder, you can read the official documentation on all functions at [MeshTxBuilder - All API Endpoints](https://meshjs.dev/apis/transaction/builder) and examples at [MeshTxBuilder - Craft Customized Transactions](https://meshjs.dev/apis/transaction/builderExample).

MeshTxBuilder is implemented based on the design of the lower level CLI commands in `cardano-cli`. You can learn more about it at [Cardano Docs](https://docs.cardano.org/development-guidelines/use-cli/).

