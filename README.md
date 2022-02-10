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

This App fetches data from a platform called HaulSmart, where the login credentials below allows access to demo data.

Username: Test
Password: Test
Email: test@test.com

When manually syncing data, the fetch API will download a demonstration blast polygon and design hole pattern.

The User can then interact with the blast holes, clicking the hole to insert the actual drilling depth. This is usually undertaken by 'dipping' the hole with a tape measure to read the metres from the top to bottom of the blast hole.

The App is designed to be mobile friendly with a dark background to assist viewing in outdoor environments and attempting to overcome glare off protective covers on tablets.

An optional extra is to view the pattern on a worksheet instead of a map. The user can sort the holes either alphabetically or by GPS position.

The App is installable on the device allowing offline login and functionality, placing an icon on the mobile home screen for easy access.

When clicking a hole the User will be presented with a popup to insert the measured hole depth. On input, the hole will be colored according to the drill tolerances:

Green - within +/- 200mm
Orange - withing +/- 500mm
Red - outside +/- 500m

Measured holes that are less than the design are usually redrilled.
Measured holes that are greater than the design are usually backfilled with drilling cuttings.

The purpose of measuring the hole is to ensure that the explosive loaded into the hole is positioned correctly. Underchanging explosives into holes does not achieve the fragmentation required at depth, whilst overcharging a hole can be inefficient in terms of cost.

<img src="../../blob/main/client/public/images/drillhole_explanation.png">

As per the above illustration:

- overdrilled but charged to design explosive quantity - overstemmed resulting in poor fragmentation in the stemming colum
- overdrilled and overcharged explosive to design stemming depth - possible explosive energy loss due to hole expulsion and subsequent poor fragmentation
- underdrillied but charged to design stemming depth - not sufficient explosive energy casuing poor fragementation and possible toe in the floor
- underdrilled and explosive charged to design quantity - not sufficent stemming column to contain the charge and possible explosive energy loss due to hole expulsion and subsequent poor fragmentation

Redrilling holes underdrilled to ensure correct hole charging is additional cost due to machine hours and resources required (extra wear on drill bits and rods).

Backfilling holes overdrilled to ensure correct hole charging is additional cost due to resources required (personnel backfilling holes with drill cuttings).

All the data captured using this app will assist drill and blast engineers with monitoring performance and analysis of their drill and blast operations.

# Screenshots

<img src="../../blob/main/client/public/images/db_splash.png">

<img src="../../blob/main/client/public/images/db_screenshot.png">

<img src="../../blob/main/client/public/images/db_worksheet.png">

# Installation

Additional resources requiring installation:

npm install jquery --save

npm install react-device-detect --save

Because the App requires fetching data through an API, jquery was utilised to mitigate CORS policies for cross origin data transfer.

# Link

<a href="https://blastholedipping.herokuapp.com/">Drill & Blast QA/QC</a>

# License

MIT
