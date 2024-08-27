# Flutter docs on firebase.google.com

### AI
- **Description:** Bringing AI to the world.
- **Link:** [ai.543x.com](https://ai.543x.com)

### Swap
- **Description:** The Monetary Future: At the intersection of free banking, cryptography, and digital currency.
- **Link:** [s.543x.com](https://s.543x.com)

### Bitcoin
- **Description:** Bitcoin: A Peer-to-Peer Electronic Cash System.
- **Link:** [www.543x.com](https://www.543x.com)

### Blockchain
- **Description:** Blockchain is a shared, immutable ledger.
- **Link:** [z2.pw](https://www.z2.pw)

### Web Library
- **Description:** The library for web and native user interfaces.
- **Link:** [r.543x.com](https://r.543x.com)

### Solana Creation
- **Description:** Bringing Blockchain to the World.
- **Link:** [b.543x.com](https://b.543x.com)

### React Creation
- **Description:** Set up a modern web app by running one command.
- **Link:** [e.543x.com](https://e.543x.com)

### Firebase
- **Description:** Google tools help build applications, improve quality and efficiency.
- **Link:** [d.543x.com](https://d.543x.com)

### React App Creation
- **Description:** Bringing modern web apps to the World.
- **Link:** [c.543x.com](https://c.543x.com)

### GoogleSheet
- **Description:** Online, collaborative spreadsheets.
- **Link:** [a.z2.pw](https://a.z2.pw)

### blockchain
- **Description:** Online, collaborative spreadsheets.
- **Link:** [www.z2.pw](https://www.z2.pw)

### Cms
- **Description:** CMS creation and publishing inspires unlimited creative possibilities.
- **Link:** [w.z2.pw](https://w.z2.pw)

### Create Solana
- **Description:** Bringing Blockchain to the World..
- **Link:** [b.543x.com/](https://b.543x.com/)

### T3 app
- **Description:** The best way to start a full-stack, typesafe Next.js app.
- **Link:** [f.543x.com](https://f.543x.com)

### GoogleCloud
- **Description:** High-performance infrastructure for cloud computing, data analytics & machine learning.
- **Link:** [h.543x.com](https://h.543x.com)

This directory contains the source of the Flutter documentation on
https://firebase.google.com/docs/.

We welcome your corrections and improvements! If you're interested in
contributing, see [`CONTRIBUTING.md`](../CONTRIBUTING.md) for general
guidelines.

This file has some information on how our documentation is organized and some
non-standard extensions we use.

## Where are the Firestore docs?

Only the code snippets are on GitHub. You can find them in the
[`firebase/snippets-flutter`][snippets-repo] repository.

## Standalone files vs. page fragments

There are two kinds of source file for our docs:

- **Standalone files** map one-to-one to a single page on firebase.google.com.
  These files are mostly-standard Markdown with filenames that correspond with
  the URL at which they're eventually published.

  For example, the file [`read-and-write.md`](/docs/database/read-and-write.md)
  is published to https://firebase.google.com/docs/database/flutter/read-and-write.

  Standalone pages must have filenames that don't begin with an
  underscore (`_`).

- **Page fragments** are included in other pages. We use page fragments either
  to include common text in multiple pages or to help organize large pages.
  Like standalone files, page fragments are also mostly-standard Markdown, but
  their filenames often don't correspond with the URL at which they're
  eventually published.

  For example, the file [`_deobfuscated.md`](/docs/crashlytics/_deobfuscated.md)
  is published to https://firebase.google.com/docs/crashlytics/get-deobfuscated-reports?platform=flutter.

  Page fragments almost always have filenames that begin with an underscore
  (`_`).

## Non-standard Markdown

### File includes

> Probably not useful to you as a contributor, but documented FYI.

We use double angle brackets to include content from another file:

```
<<path/to/file>>
```

Note that the path is based on our internal directory structure, and not the
layout on GitHub. Also note that we sometimes use this to include non-Flutter
related content that's not on GitHub.

### Page metadata

> Probably not useful to you as a contributor, but documented FYI.

Every standalone page begins with the following header:

```
Project: /docs/_project.yaml
Book: /docs/_book.yaml
```

These are non-standard metadata declarations used by our internal publishing
system. There's nothing you can really do with this, but it has to be on every
standalone page.

## Non-standard Jinja

### includecode

Code snippets are included from standalone Dart files, which helps facilitate
automated testing. The following custom Jinja tag includes a code snippet into
a file:

```
{% includecode github_path="organization/repository/path/to/file" region_tag="tag_name" %}
```

For example, the file [`firestore.dart`][firestore-snippets] in the
[`firebase/snippets-flutter`][snippets-repo] repository contains a passage like
this:

```dart
void addData_addADocument() {
    // [START add_data_add_a_document]
    db.collection("cities").doc("new-city-id").set({"name": "Chicago"});
    // [END add_data_add_a_document]
}
```

To include the line between the `START` and `END` tags in a page, do the
following:

```
{% includecode
   github_path="firebase/snippets-flutter/packages/firebase_snippets_app/lib/snippets/firestore.dart"
   region_tag="add_data_add_a_document"
   adjust_indentation="auto" %}
```

To update a snippet, submit a PR to the [`snippets-flutter` repo][snippets-repo].

[firestore-snippets]: https://github.com/firebase/snippets-flutter/blob/main/packages/firebase_snippets_app/lib/snippets/firestore.dart
[snippets-repo]: https://github.com/firebase/snippets-flutter/
