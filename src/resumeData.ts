import {ResumeData as ResumeDataImpt} from "./interfaces"

const ResumeData: ResumeDataImpt = {
  "main": {
    "name": "Henry LeCompte",
    "occupation": "Python Developer && CEO of Volunteerio",
    "description": "Full Stack Mobile Developer and Entrepreneur",
    "image": "Henry.jpg",
    "bio": "Hello, my name is Henry, I'm a Full Stack Mobile Developer currently working on my project, Volunteerio. ",
    "contactmessage": "Get in touch with me to receive details or anything else.",
    "email": "henry@volunteerio.us",
    "phone": "+1 (305) 873-4510",
    "address": {
      "street": "123 Fake Street",
      "city": "Miami",
      "state": "FL",
      "zip": "12345"
    },
    "website": "http://www.volunteerio.us",
    "resumedownload": "/resume",
    "social": [
      {
        "name": "github",
        "url": "http://github.com/henrylec",
        "className": "fa fa-github"
      }
    ]
  },
  "resume": {
    "education": [
      {
        "school": "University of Kent",
        "degree": "Masters in Advanced Computer Science",
        "graduated": "January 2017",
        "description": "Graduated with Distinction"
      }
    ],
    "work": [
      {
        "company": "Volunteerio",
        "title": "CEO & Software Engineer",
        "years": "November 2019 - Present",
        "description": "CEO of Volunteerio, an app to trak community service hours."
      }
    ],
    "skillmessage": "My Skills!",
    "skills": [
      {
        "name": "Flask",
        "level": "100%"
      },
      {
        "name": "Python",
        "level": "100%"
      },
      {
        "name": "Git",
        "level": "90%"
      },
      {
        "name": "Xamarin Forms",
        "level": "80%"
      },
      {
        "name": "Postgresql",
        "level": "50%"
      },
      {
        "name": "ReactJS",
        "level": "40%"
      }
    ]
  },
  "portfolio": {
    "projects": [
      {
        "title": "Volunteerio",
        "category": "Mobile app to track community service hours (built in Xamarin Forms, Flask, Python, C#, and Postgres). Hosted on AWS.",
        "image": "volunteerio.png",
        "url": "https://www.volunteerio.us"
      },
      {
        "title": "Just Clock It",
        "category": "React App to keep track of times. User accounts with Google Oath.",
        "image": "JCI.png",
        "url": "https://just-clock-it-5ac2b.web.app/"
      }
    ]
  },
  "testimonials": {
    "testimonials": [
      {
        "text": "Nothing",
        "user": "Nothing"
      }
    ]
  }
}

export default ResumeData
