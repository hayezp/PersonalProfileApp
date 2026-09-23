# Personal Profile Mobile App

## CMPS 460 - Mobile Development
**Page Hayes**

## About My App

For this assignment I made a personal profile app using React Native. I kept it pretty simple and focused on making it look clean and organized. I included some information about me, my education, skills I have learned through school and work, and what I want to do in the future. I also separated parts of the app into different sections instead of putting everything together in one section.

## Written Questions

### 1. What is React Native, and why would an organization choose it for mobile application development?

React Native is a way to build mobile apps using JavaScript or TypeScript. A company may choose it because they can use a lot of the same code for Android and iOS. This can make it easier than creating two completely different apps.

### 2. What is the purpose of a View component?

I think of a View component as something like a container for various things on a screen. I used Views in my app to group things together and make each section easier to be organized.

### 3. Why must text normally be placed inside a Text component?

Text has to be placed inside a Text component for React Native to display it correctly. It also lets you change things like the size, color, and boldness of the text.

### 4. What is TSX?

TSX lets you use TypeScript and React code together. My App.tsx file is where I wrote the components and the layout for what shows up on the screen of my app.

### 5. What is the purpose of StyleSheet.create()?

StyleSheet.create() is what I used to style my app. This is where I changed things like colors, font sizes, spacing, borders, and the rounded corners on my sections. It helped me keep all of my styles organized instead of putting them throughout the rest of my code.

### 6. What is a React component?

A React component is basically a section of the app that you can create separately. In my app, I made Education, Technical Skills, and Career Goals into their own components. Doing this helped me understand how an app can be broken down into smaller parts, and make it nicer to look at.

### 7. Why would developers divide an application into multiple components instead of putting everything inside App.tsx?

Diving things makes the code a lot easier to read and work with. If everything was inside App.tsx, it could get confusing once an app gets bigger. Breaking my app into components helped keep everything organized and made it easier for me to see what each part of the code was doing. Developers would do this to keep organization and the app neat. 

### 8. Describe one error you encountered while developing your application and explain how you resolved it.

The biggest issue that I ran into was honestly just getting everything set up and getting my app to actually run on the Android Emulator. At first React Native could not find my Android SDK. I had to find where the SDK was installed on my computer and add the correct path to the project. I also had an issue with the adb command not working, so I had to update my PATH settings and restart VS Code. Once I fixed those things, I was finally able to get the app running on the emulator and everything be running good. 

## What I Used

- React Native
- TypeScript
- Android Studio
- Android Emulator
- Visual Studio Code
- Git and GitHub