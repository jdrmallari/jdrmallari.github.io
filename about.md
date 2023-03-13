---
layout: page
title: About me
permalink: /about/
---

```java

/* 
 * Greetings! My name is Janelle. I'm a penultimate year 
 * IT/Engineering student looking for a full-time or 
 * part-time entry opportunity in the IT sector. I'm 
 * accomplished in a multitude of programming languages 
 * and data science as well as possess the ability to 
 * grasp new concepts completely and easily.
 */ 

import java.util.*;

public class Main {
    public static void main(String[] args) {

        String myFName = "Janelle";
        String myLName = "Mallari";

        int myAge = 23;
        
        String myEducation = 
        "Bachelor of IT/Engineering (Hons) at Macquarie 
        University (2019-Present)";

        ArrayList<String> myExperience = new 
        ArrayList<String>();
        myExperience.add("Support Services Level 6 
        (Results Department) at Douglass Hanly Moir 
        Pathology (January 2018 - Present)");
        myExperience.add("Template Business Analyst at 
        Midwinter Financial Services (July 2021 - Present)");

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
        mySkills.add("Markdown");
        mySkills.add("Statistical Modelling");
        mySkills.add("Machine Learning");
        mySkills.add("Data Visualisation");
        

        ArrayList<String> myInterests = new 
        ArrayList<String>();
        myInterests.add("Linguistics");
        myInterests.add("Chess");
        myInterests.add("Programming");
        myInterests.add("Reading");
        myInterests.add("History");
        myInterests.add("Philosophy");
        myInterests.add("Bushwalking");
        myInterests.add("Gardening");
        myInterests.add("Most Things :)");
        
        String myContactDetails = "janelledelosreyesmallari
        @gmail.com";

        Candidate jmallari = new Candidate(myFName, myLName, 
        myAge, myInterests, myEducation, myExperience, 
        mySkills, myContactDetails);

        // Display relevant info on console

        System.out.println(jmallari.basicIntro());

        /* remove whitespace, brackets, and everything in 
         between the brackets from most recent experience */

        System.out.println("I'm currently working as a " + 
        myExperience.get(myExperience.size() - 1).replaceAll
        ("\\s+\\((.*?)\\)", ".") + "\n");

        System.out.println("I'm proficient in:");
        for (String skill : mySkills) { 		      
            System.out.println("- " + skill);
        }

        System.out.println("\n");

        System.out.println("My hobbies and interests 
        include:");
        for (String interest : myInterests) { 		      
           System.out.println("- " + interest);
        }
        
    }
}

public class Person {

    // Declarations
    public String fName;
    public String lName;
    public int age;
    private ArrayList<String> interests;

    // Constructors
    Person(String fName, String lName, int age, 
    ArrayList<String> interests) {

        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.interests = interests;

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

    public ArrayList<String> getInterests() {
        return interests;
    }
    
    public void setAge(int age) {
        this.age = age;
    }

    public void incrementAge() {
        this.age = this.age + 1;
    }

    public String basicIntro() {
        return "Hello! My name is " + getFName() + 
        " " + getLName() + ". Nice to meet you.";
    }

}

public class Candidate extends Person {

    private String education;
    private ArrayList<String> experience;
    private ArrayList<String> skills;
    private String contactDetails;

    Candidate(String fName, String lName, int age, 
    ArrayList<String> interests, String education, 
    ArrayList<String> experience, ArrayList<String> skills, 
    String contactDetails) {

        super(fName, lName, age, interests);
        this.education = education;
        this.experience = experience;
        this.skills = skills;
        this.contactDetails = contactDetails;
         
    }

    public String getEducation() {
        return education;
    }

    public ArrayList<String> getSkills() {
        return skills;
    }

    public String getContactDetails() {
        return contactDetails;
    }

}

```