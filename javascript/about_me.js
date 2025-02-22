const firstYearSubjects = [
{ name: "Web Development Fundamentals", grade: "100%", description: "This module introduces learners to the core principles and techniques involved in developing web pages." },
{ name: "Computer Mathematics", grade: "97%", description: "This module covers key mathematical concepts needed for studying computing, providing a strong foundation for problem-solving and logical thinking." },
{ name: "Mathematical Methods", grade: "96%", description: "This module provides a foundation in key mathematical methods used in the study of computing." },
{ name: "Digital Systems Design", grade: "95%", description: "This module covers the design and implementation of digital systems, from initial specifications to integrated circuits (ICs). It starts with defining requirements and gradually develops more advanced circuits throughout the course." },
{ name: "Digital Systems Concepts", grade: "91%", description: "This module introduces the structure and function of modern computers, covering key components like the processor, memory, and storage. Topics include number systems, data representation, Boolean algebra, logic circuits, adders, registers, and basic computer organization. It also explores programming digital hardware using assembly language and machine code." },
{ name: "Structured Programming", grade: "91%", description: "This module explores the principles and implementation of Structured Programming, providing an in-depth analysis of its core concepts." },
{ name: "Introduction To Programming", grade: "90%", description: "This module introduces computer programming using C++, covering fundamental concepts, methodologies, and techniques essential for software development." },
{ name: "Operating Systems Fundamentals", grade: "89%", description: "This module provides an overview of the purpose, functions, and structure of modern computer operating systems." },
{ name: "Understanding Local Area Networks", grade: "85%", description: "This module introduces switching and routing technologies commonly used in small office/home office (SOHO) and small to medium enterprise (SME) local area networks." },
{ name: "Communications And Applications", grade: "85%", description: "This module helps develop essential communication skills and fosters independence in learning. It covers interpersonal communication, personal development, and self-management while teaching how to express ideas effectively through various applications in written, oral, and visual formats." },
{ name: "ICT and Applications", grade: "78%", description: "This module emphasizes the importance of communication tools and methods. It focuses on using multiple applications and technologies to develop skills in reporting, presenting, and expressing ideas effectively through written, oral, and visual communication." },
{ name: "Introduction To Computer Networks", grade: "75%", description: "This module introduces computer networking, covering the basics of building small networks and exploring key technologies and standards." }];

const secondYearSubjects = [
{ name: "Statistics and Probability", grade: "97%", description: "This module aims to further develop mathematical ability and provide the basic statistical and probability concepts required for information technology, along with the knowledge needed for data analysis." },
{ name: "Introduction to Object Oriented Programming", grade: "95%", description: "This module introduces the principles of object-oriented programming in C++, focusing on the creation and manipulation of classes and objects." },
{ name: "Operating Systems Structures", grade: "92%", description: "This module extends concepts from Operating Systems Fundamentals to multi-user and network-based operating systems." },
{ name: "Data Formats and Storage", grade: "87%", description: "This module introduces data storage systems and various formats used for reliable and efficient data storage." },
{ name: "Enterprise Network Design", grade: "85%", description: "This module provides a survey of architectures and considerations for designing, securing, operating, and troubleshooting enterprise networks, along with automation concepts supporting network digitization." },
{ name: "Data Essentials", grade: "68%", description: "This module provides a solid foundation for working with data and databases, covering fundamental concepts, design principles, and key terminology." },
{ name: "Client-Server Technologies", grade: "N/A", description: "This module introduces the client-server paradigm, covering the technologies and methods used to implement client-server systems." },
{ name: "Cyber Security Operations", grade: "N/A", description: "This module is designed to equip individuals with the skills and knowledge needed to work as a Security Analyst in a Security Operations Centre team, balancing theory and practice." },
{ name: "Database Administration", grade: "N/A", description: "The aim of the module is to enable individuals to acquire and demonstrate a comprehensive understanding of modern techniques and challenges in commercial client/server database administration, processing, and subsequent analysis." },
{ name: "Operating Systems Scripting", grade: "N/A", description: "This module introduces scripting for the purposes of operating systems administration." },
{ name: "Public Cloud Foundations", grade: "N/A", description: "This module will enable learners to manage the computer networking components of multimedia or internet application development and introduce the fundamentals of Cloud Computing." },
{ name: "Server Virtualisation & Storage", grade: "N/A", description: "This module will allow learners to examine the principles and technologies that enable SMEs and enterprise businesses to deploy and manage virtual servers and storage devices in data centers." }];

function createAccordion(subjectList, parentElement) {
    subjectList.forEach(subject => {
        const li = document.createElement('li');
        li.className = "subject";
    
        const header = document.createElement('div');
        header.className = "accordionHeader";
        header.innerHTML = `<p>${subject.name}</p> <p class="grade">${subject.grade}</p>`;
    
        const content = document.createElement('div');
        content.className = "content";
        content.innerHTML = `<p>${subject.description}</p>`;
    
    
        header.addEventListener('click', () => {
            const isActive = header.classList.contains('active')
            document.querySelectorAll('.accordionHeader').forEach(head => head.classList.remove('active'));
            document.querySelectorAll('.content').forEach(cont => {
                cont.style.maxHeight = "0";
            });
    
            if(!isActive) {
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    
        li.append(header);
        li.append(content);
        parentElement.append(li);
    });    
}

const firstYearList = document.querySelector('#firstYearAccordion')
const secondYearList = document.querySelector('#secondYearAccordion')

createAccordion(firstYearSubjects, firstYearList);
createAccordion(secondYearSubjects, secondYearList);