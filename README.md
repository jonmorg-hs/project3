# DRILL & BLAST QA/QC

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Link](*link)
- [License](#license)

# Description

This is a PWA app developed to digitise the collection of drill hole data in the open pit mining operations. Measuring blast pattern hole depths after drilling to determine compliance with design depths is an important step in best practice quality assurance / quality control for drill and blast processes in order to achieve optimal fragmentation of ground for excavation.

Becuase internet network coverage cannot be 100% reliable in surface mining operations, storing reference data when internet network is available (blast polygons and pattern design markers) and captured data once in the field is of practical importance. To achieve this, this app uses IndexedDB to reliably store data on the device allowing access when working offline.

When inserting blast hole drill depth data, if internet connection exists, the data will be directly sent to the cloud, whilst storing the data on the device. If offline, the blast hole drill depth data will be stored in a 'pending' indexedDB store waiting for internet connection to upload either automatically or manually.

Live uploading allows engineers and supervisors to view captured data in real time, monitoring drilling performance and progress.

# Screenshots

<img src="../../blob/main/client/public/images/db_splash.png">

<img src="../../blob/main/client/public/images/db_screenshot.png">

# Installation

Additional resources requiring installation:

npm install jquery --save

npm install react-device-detect --save

Because the App requires fetching data through an API, jquery was utilised to mitigate CORS policies for cross origin data transfer.

# Link

<a href="https://blastholedipping.herokuapp.com/">Drill & Blast QA/QC</a>

# License

MIT
