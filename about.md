---
layout: page
title: About
permalink: /about/
---

```java

/* 
 * Greetings! My name is Janelle. I'm a penultimate year 
 * IT/Engineering student looking for a full-time entry 
 * opportunity in the IT sector. I'm accomplished in a 
 * multitude of programming languages and data analysis as 
 * well as possess the ability to grasp new concepts 
 * completely and easily.
 */ 

import java.util.*;

public class Main {
    public static void main(String[] args) {

        String myFName = "Janelle";
        String myLName = "Mallari";

        int myAge = 22;
        
        String myEducation = 
        "Bachelor of IT/Engineering (Hons) at Macquarie University (2019-Present)";

        ArrayList<String> mySkills = new ArrayList<String>();
        mySkills.add("Java");
        mySkills.add("Python");
        mySkills.add("R");
        mySkills.add("C");
        mySkills.add("HTML");
        mySkills.add("CSS");
        mySkills.add("JavaScript");
        mySkills.add("SQL");
        mySkills.add("Git");
        mySkills.add("Arduino");
        mySkills.add("JSON");

        ArrayList<String> myInterests = new ArrayList<String>();
        myInterests.add("Linguistics");
        myInterests.add("Chess");
        myInterests.add("Programming");
        myInterests.add("Reading");
        myInterests.add("History");
        myInterests.add("Stoicism");
        myInterests.add("Bushwalking");
        myInterests.add("Everything :)");
        
        String myContactDetails = "janelledelosreyesmallari@gmail.com";

        Candidate jmallari = new Candidate(myFName, myLName, myAge, myEducation, mySkills, myInterests, myContactDetails);

        System.out.println(jmallari.basicEnglishIntro());
        
    }
}

public class Person {

    // Declarations
    public String fName;
    public String lName;
    public int age;

    // Constructors
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
    
    public void setAge(int age) {
        this.age = age;
    }

    public void incrementAge() {
        this.age = this.age + 1;
    }

    public String basicEnglishIntro() {
        return "Hello! My name is " + this.fName + 
        " " + this.lName + ".";
    }

}

public class Candidate extends Person {

    private String education;
    private ArrayList<String> skills;
    private ArrayList<String> interests;
    private String contactDetails;

    Candidate(String fName, String lName, int age, String education, ArrayList<String> skills, ArrayList<String> interests, String contactDetails) {

        super(fName, lName, age);
        this.education = education;
        this.skills = skills;
        this.interests = interests;
        this.contactDetails = contactDetails;
         
    }

    public String getEducation() {
        return education;
    }

    public String getContactDetails() {
        return contactDetails;
    }

}

```