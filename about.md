---
layout: page
title: About
permalink: /about/
---

```java
/* 
 * Greetings! My name is Janelle. I'm a penultimate year IT/Engineering student looking for a full-time entry opportunity in the IT 
 * sector. I'm accomplished in a multitude of programming languages and data analysis as well as possess the ability to grasp
 * new concepts completely and easily.
 */ 

import java.util.*;

class Main {

    public static void main(String[] args) {

        int myAge = 22;
        String myEducation = "Bachelor of IT/Engineering (Hons) at Macquarie University (2019-Present)";
        String[] mySkills = new String {"Java", "Python", "R", "C", "HTML", "CSS", "JavaScript", "SQL", "Git", "Arduino", "JSON"};
        String[] myInterests = new String {"Linguistics", "Chess", "Programming", "Reading", "History", "Stoicism", "Everything :)"};
        String myContactDetails = "janelledelosreyesmallari@gmail.com";

        Candidate jm = new Candidate("Janelle", "Mallari", myAge, myEducation, mySkills, myInterests, myContactDetails);
        
    }

}

public class Person {

    // Declaration
    private String fName;
    private String lName;
    private int age;

    // Constructor
    Person(String fName, String lName, int age) {

        this.fName = fName;
        this.lName = lName;
        this.age = age;

    }

    // Methods
    public String getFName() {
        return fName;
    }
    
    public String getLName() {
        return lName;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int ageVal) {
        age = ageVal;
    }

}

public class Candidate extends Person {

    private String education;
    private String[] skills;
    private String[] interests;
    private String contactDetails;

    Candidate(String fName, String lName, int age, String education, String[] skills, String[] interests, String contactDetails) {

        super(fName, lName, age);
        this.education = education;
        this.skills = skills;
        this.interests = interests;
        this.contactDetails = contactDetails;

    }

    public String getEducation() {
        return education;
    }

    public String[] getSkills() {
        // TO DO
    }

    public String[] getInterests() {
        // TO DO 
    }
    
    public String getContactDetails() {
        return contactDetails;
    }

}

```