---
title: Final Project Post 4
date: "2020-11-29T22:40:32.169Z"
---

<h1>Workout Tracker</h1>

With Thanksgiving this week I didn't get as much done as I would've liked, but this week I worked on trying to get my update to work and save the new informaiton to the database when the save button is clicked. I don't think I'm passing in the right data to be sent. I'll have to work on it a little more to figure that one out. I also started working on the ranking system for the workouts. 

Next week I will keep working on the update to the database. I will also work on the rankings. Right now I have just added a dropdown to the workout with easy, medium and hard options, but what I would like is for the dropdown to appear and disappear on the edit and save. Then the workout out will appear in the selected difficulty. 

I figured out why my edit and save buttons are really only working on the first workout. I've been using querySelector which only returns the first child element that matches what is specified. I tried using getElementsByClassName and querySelectorAll but they weren't working the way I wanted. I still get a little confused as to when the best time to use each one is.

