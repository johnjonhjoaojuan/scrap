---
layout: default
title: Home Page
description: This is the description for the home page
---

<html lang="en">
    <head>
        <title> Scrap </title>
          <link rel="stylesheet" href="https://johnjonhjoaojuan.github.io/scrap/assets/css/style.scss" media="print" onload="this.media='all'"> 
          <!-- "Inter" Font -->
          <link rel="preconnect" href="https://rsms.me/">
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
            <style>
                body {
                    font-family: 'Inter','Helvetica', 'Arial';
                    background-color: #181a1b;
                    margin: 0;
                    padding: 0;
                }
            </style>
    </head>
    <body>
        <!-- This id is where the back to top button returns to-->
        <a id="top"></a>
        <!--
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        -->
        <br>
        <br>
        <h1 class="bt">hi</h1>
        <hr>
            <h2>Welcome</h2>
            <p class="reader" >to the jonh page</p>
            <img class="contain" loading="lazy" alt="kitty kitty kitty" src="images/IMGP9747.png"/>
            <br>
    <!-- Old html image code - <img class="contain" loading="lazy" alt="Slideshow images showing progress" src="images/prg1.png" style="display: block;"/> -->
                <div class="image-container">
                    <img class="contain" alt="Slideshow images showing progress" id="slideshow" src="images/prg1.png" style="display: block;"/>
                </div>
                <div class="prog-bar">
                    <span class="dot" data-index="0"></span>
                    <span class="dot" data-index="1"></span>
                    <span class="dot" data-index="2"></span>
                    <span class="dot" data-index="4"></span>
                </div>
        <div class="desc">Click on the screenshot above </div>
        <h2> To-Do List </h2>
            <ol>
                <li>Reader Mode</li>
                <li>Change Font?</li>
                <li>Update the Navigation Page</li>
                <li>Fix screen size issues</li>
                <li>Bug where elements aren't aligned until you start scrolling to fix</li>
                <li>Sidebar - add stuff</li>
                <li>Add some buttons (to sidebar maybe) to skip to certain parts of content</li>
                <li></li>
                <li></li>
                <li>DON'T FORGET TO HIDE THE TO-DO LIST!!!!</li>
            </ol>
            <br>
            <div class="navb">
                <a class="button cr" href="#top">Back to top</a>
                <!-- If the buttons stop working, reverse to this https://johnjonhjoaojuan.github.io/scrap/navigation template-->
                <a class="button cr" href="navigation.html">Navigation page</a>
            </div>
        <script src="scripts/main.js" defer></script>
        <script src="scripts/slideshow.js" defer></script>
    </body>
</html>