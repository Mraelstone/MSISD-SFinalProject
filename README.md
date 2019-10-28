# MSIS Final Project
This repo is for the final project in the MSIS program.

## Our Project: Build an app for Oconee Fire Department

We are Team 6 (BigRed0100) building a web app for Oconee Fire Department to help manage their firefighters and their certifications among other things.

The technology stack included HTML/CSS/Javascript for the front end, Apache for the web server, PHP for the application layer and MySQL for the database. The database is hosted on Amazon RDS and the application is hosted on an Amazon EC2 instance.

## How the Application works

# Home: 

Displays the general information about Oconee Fire Department

# About Us: 

Shows a little bit more detail about the Oconee Fire Department

# Add Members: 

  Shows the current members at the bottom of the page. The top is a form that allows you to fill out to add new members. 
  
  1) Fill out form details
  2) Click "Add Member"

  If you want to edit member, go down to the list of members and click "Update" which will populate the form with the member information. Edit what you want and click "Edit Member" to update.

  If you want to view the profile of the member, click "View Profile" for more details
  
  If you want to delete the member, click "Delete"
  
# Add Certifications: 

  Shows the current certifications, the certification name, experiation period, and certification agency. If you want to add new certifications:
  
  1) Fill out form details
  2) Click "Add Certification" 

  If you want to edit certifications, go down to the list of certifications and click "Update" which will populate the form with the certification information. Edit what you want and click "Edit Certification" to update.

  If you want to view the certification and who they're assigned to, click "View" for more details
  
  If you want to delete the certification, click "Delete"

# Assign Certification to Members:

  Allows you to assign a certification to a member.
  
  1) Choose a member ID from dropdown
  2) Choose a certification from dropdown
  3) Choose a date
  4) Click "Assign"
  
# Show Members by Station & Radio #

  Allows you to filter out members by Station & Radio #. Simply select the filter criteria and the report should adjust accordingly
  
# Show Expired Certifications

  Allows you to filter out expired certifications and who it's assigned to. Simply choose the certification ID you want to see that's expired to see who is holding expired certifications.
  
# Contact Us

  Allows you to send us an email in the contact form.

Linked here is the EC2 server that the application is hosted on: ec2-52-87-43-243.compute-1.amazonaws.com 

Thanks and enjoy!
