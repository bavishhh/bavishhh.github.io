---
layout: post
title: Zotero Tips and Tricks
date: 2025-12-25 18:08:00-0400
tags: tips
categories: notes
giscus_comments: false
related_posts: false
---

### More storage using google drive

Zotero's free account comes with 300MB of cloud storage, which fills up quickly when syncing PDFs. A better approach is to sync only the paper metadata to Zotero's cloud while storing PDFs elsewhere. I use Google Drive for this. I have a Google Workspace account which gives me 1TB of free storage, which should be more than enough for storing pdfs.

The [zotmoov](https://github.com/wileyyugioh/zotmoov) plugin makes this seamless by automatically moving attachments to a different folder whenever you add a new paper through the browser extension.

To set this up, configure zotmoov to save attachments to your Google Drive folder location (the folder where the drive is mounted on your computer). This way, attachments sync to Google Drive while your paper metadata syncs to Zotero's cloud. The benefit of having the metadata on Zotero's cloud is that you can access your library on Zotero Web or when you login to Zotero on any other device. 

### Fixing attachment links when moving attachment folder

When you move to a new computer or change your attachment folder location, papers already in your library won't open because the file paths are outdated. The [zutilo](https://github.com/wshanks/Zutilo) plugin solves this quickly.
Here's how:

- Enable the "Modify Attachments" option in Zutilo settings
- Select all items in your library
- Choose "Modify Attachment Paths" under Zutilo
- Enter the old path component that needs replacing, then enter the new path

For example, if your old path was `C:/Users/Documents/Zotero/papername.pdf` and you've moved everything to `D:/Research`, enter `C:/Users/Documents` in the first box and `D:/Research` in the second.

### Managing Tags

By default, Zotero automatically adds tags when importing items, which can create clutter. You can disable this under `Settings → General → Miscellaneous` by unchecking "Automatically tag items with keywords and subject headings."
For more control, the [zotero-actions-tags](https://github.com/windingwind/zotero-actions-tags) plugin lets you add or remove tags based on events. I use it to automatically add an `unread` tag to every new item I add to my library.

### Better Citation Previews

To see how a citation will appear when exported, go to Settings → General → Item pane header → Bibliography entry. However, you can't copy this preview directly to your clipboard.
The [ZoteroPreview](https://github.com/dcartertod/zotero-plugins) plugin adds this functionality, making it easy to grab formatted citations quickly.

### Saved Searches

Saved Searches let you create dynamic collections that automatically update based on criteria you define, like papers with specific tags, papers added in the last week, and so on.

To create one:

- Click the magnifying glass icon in the search bar
- Select Advanced Search
- Enter your criteria
- Click "Save Search"

Your saved search will appear in the sidebar and automatically update as your library changes.