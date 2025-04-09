# Photolabs

PhotoLab is a react-based web application that allows users to browse and favorite photos. It fetches photos and topics from an API, enabling users to view photos based on different categories. Users can also mark photos as favorites, and select an specific photo to view a larger version of it and similar photos.

## Table of contents

- [Features](#features)
- [Setup and Installation](#setup-and-installation)
  - [Server Setup](#server-setup)
- [Backend API](#backend-api)
- [Final Product](#final-product)

## Features

- **Browse Photos:** Users can view a list of all available photos on the homepage.
- **Explore by Topic:** The navigation bar allows users to select different topics to view related photos.
- **Favorite Photos:** Users can "like"" photos.
- **Detailed View:** Clicking on a photo opens a modal to get a larger view of the photo and relevant/similar photos.

## Setup and Installation

**Clone the repository:**

    ```bash
    git clone [https://github.com/alemolina43/photolabs.git]git
    cd into your cloned repo
    ```

**Server Setup**

[Backend Setup Instructions](/backend/)

[Frontend Setup Instructions](/frontend/)

## Backend API

This application relies on a backend API to fetch photos and topics. The API endpoints used are:

- `/api/photos`: Fetches all photos.
- `/api/topics`: Fetches all topics.
- `/api/topics/:topicId/photos`: Fetches photos specific to a given topic ID.

[Check all the details here](/backend/)

## Final Product

!["Main page"](https://raw.githubusercontent.com/alemolina43/photolabs/refs/heads/main/docs/Main_page.png)
!["Modal"](https://raw.githubusercontent.com/alemolina43/photolabs/refs/heads/main/docs/Modal.png)
!["Photos by category"](https://raw.githubusercontent.com/alemolina43/photolabs/refs/heads/main/docs/Photos_by_category.png)
!["Like notification"](https://raw.githubusercontent.com/alemolina43/photolabs/refs/heads/main/docs/Like_notification.png)
