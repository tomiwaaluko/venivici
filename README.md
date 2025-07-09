# Web Development Project 4 - _Veni Vici - Dog Discovery!_

Submitted by: **Olatomiwa Aluko**

This web app: **A React application that fetches random dog images from the Dog CEO API, displays dog breed information, and allows users to ban specific breeds from future results. Users can discover new dogs while filtering out unwanted breeds through an interactive ban list system.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list
  - Clicking on an attribute in the ban list should immediately remove it from the ban list
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  - [x] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [ ] Users can see a stored history of their previously displayed results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

- [x] **Modern, responsive UI design** with gradient backgrounds and glassmorphism effects
- [x] **Loading states** - Shows loading indicator while fetching API data
- [x] **Error handling** - Displays user-friendly error messages for API failures
- [x] **Intelligent retry logic** - Automatically retries API calls up to 20 times to avoid banned breeds
- [x] **Hover effects and animations** - Interactive UI elements with smooth transitions
- [x] **Mobile-responsive design** - Optimized layout for different screen sizes
- [x] **Visual feedback** - Clear indicators for clickable elements and ban list interactions
- [x] **Breed and sub-breed support** - Handles both main breeds and sub-breeds from the Dog CEO API
- [x] **Fallback handling** - Graceful handling of unknown breeds with proper error messages

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/2EsCLsk' title='Veni Vici' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

**Challenges encountered while building the app:**

1. **API Data Parsing**: The Dog CEO API returns image URLs with breed information embedded in the path structure. Extracting breed and sub-breed information required careful URL parsing and string manipulation.

2. **Ban List Logic**: Implementing the ban list filtering required creating a retry mechanism that attempts multiple API calls until finding a dog that doesn't match any banned attributes, while avoiding infinite loops.

3. **State Management**: Managing the application state between current dog data, ban list, loading states, and error states required careful consideration of React hooks and state updates.

4. **Responsive Design**: Creating a mobile-friendly interface that works well on different screen sizes required extensive CSS media queries and flexible layout techniques.

5. **User Experience**: Balancing functionality with intuitive design, ensuring users understand which elements are clickable and how the ban list system works.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
