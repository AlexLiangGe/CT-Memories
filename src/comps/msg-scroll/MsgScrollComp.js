import React, { useState, useEffect } from 'react';
import './index.css';

const messages = [
    "As we turn the page on this chapter, may our paths be illuminated by the lessons learned and friendships forged. Farewell, but never goodbye.",
    "The future awaits with open arms. Let's embrace it with the same spirit of adventure that colored our college days. Cheers to the class of our lives!",
    "Our dreams are like stars, guiding us forward. Here's to chasing them fearlessly, knowing our time together has prepared us well.",
    "Though the tassel is worth the hassle, the memories we've made are priceless. May the road ahead be filled with opportunities and joy.",
    "College years, a symphony of laughter, learning, and late-night talks. As we part ways, may the melody of our friendship resonate forever.",
    "Each of us a unique story, intertwined in this chapter. May the next be even more extraordinary, written with courage and grace.",
    "From textbooks to life lessons, we've come so far. May our journey ahead be as enriching as the one we shared here.",
    "Here's to the friendships that turned into family, the lessons that turned into wisdom, and the dreams that are just beginning to take flight.",
    "The world is our canvas now, let's paint it with colors of our achievements and the hues of our passions.",
    "In the tapestry of life, these years were golden threads. May the pattern we weave ahead be just as bright and bold.",
    "We didn't just study together, we grew together. As we step into the unknown, may we continue to rise, hand in hand.",
    "To the late-night library sessions, early morning coffees, and everything in between. Thanks for the memories, onto making more.",
    "The end of an era, but the dawn of countless adventures. May we navigate life's seas with the compass of our dreams.",
    "As we toss our caps, let's remember the foundation we built. Solid, strong, ready for any structure we dare to design.",
    "College, a place where we found ourselves and each other. Now, let's go find our places under the sun.",
    "It's not about saying goodbye, it's about promising to make the world a better place with the knowledge we've gained.",
    "The best stories have chapters, and this was one for the books. Onward, to penning our own legendary tales.",
    "From freshmen nerves to graduation pride, what a ride it's been. Here's to the next thrilling chapter, filled with purpose and fulfillment.",
    "Our time here may be over, but the impact we leave behind stays. Carry that spirit forward, class of legends.",
    "With every farewell comes a hello. Let's greet the world with open hearts and minds, armed with our education and dreams.",
    "The friendships, the lessons, the laughs – they're all part of who we are now. Let's make our mark on the world, together in spirit.",
    "The future belongs to those who believe in the beauty of their dreams. Let's chase ours relentlessly, always remembering where we started.",
    "Today we close a door, but open a universe of possibilities. May our journey ahead be as transformative as these past years.",
    "Our time here was a masterpiece in progress. Now, let's go create masterpieces of our lives.",
    "The memories we've made are timeless, the lessons timeless too. As we venture forth, may our spirits remain forever young.",
    "From classmates to lifelong friends, what a beautiful transformation. May our roads diverge but our bond stay unbroken.",
    "The real world awaits, and we're ready. With heads held high and hearts full of hope, let's make our dreams a reality.",
    "These halls witnessed our growth, now it's time for the world to see. Go forth, shine brightly, class of stars.",
    "We laughed, we cried, we conquered. As we disperse into the world, let's keep conquering, one dream at a time.",
    "The journey doesn't end here, it merely takes a new turn. May our paths be lined with success and happiness, fueled by our college spirit.",
    "To the friendships that feel like home, no matter where we roam. May distance only strengthen our bonds, as we embark on new journeys.",
    "From theory to practice, from dreams to reality. Here's to turning our education into a force for good in the world.",
    "Our time here was a beautiful symphony. Now, let's compose our individual anthems, harmonizing in the world's grand orchestra.",
    "May the lessons we learned light our way, the memories warm our hearts, and the friendships be our anchor in every storm.",
    "The world is a book, and we're about to turn a new page. Let's make it a chapter worth reading, filled with adventure and accomplishment.",
    "As we graduate, we take with us not just degrees, but a treasure trove of experiences and connections. Onwards and upwards!",
    "The future is a blank canvas, waiting for our brushstrokes. Let's paint it with the vibrant colors of our dreams and aspirations.",
    "Here's to the late nights, the early mornings, and the countless moments in between that shaped us. Thanks for the memories, class of brilliance.",
    "We came as individuals, we leave as a community. May our paths cross again, enriched by the adventures we'll have apart.",
    "The end of a chapter, but the start of an epic tale. May our stories inspire others, just as we've been inspired here.",
    "College, where we discovered our strengths and weaknesses. Now, let's use them to shape a world that's better for all.",
    "From this day forward, let's carry the torch of knowledge, lighting up every corner we touch with our talents and kindness.",
    "It's not just a degree, it's a ticket to endless possibilities. Let's explore, innovate, and make a difference together.",
    "Our time here was a stepping stone to greatness. Now, let's climb the mountains of our dreams, one step at a time.",
    "As we part, let's remember that the best is yet to come. May our lives be a testament to the power of education and perseverance.",
    "The friendships formed, the lessons learned, will echo through our lives. Let's honor them by living fully and fearlessly.",
    "Here's to the class that dared to dream big, studied hard, and laughed louder. The world awaits your brilliance, graduates.",
    "This isn't the end, it's a new beginning. Let's make it count, class of visionaries.",
    "Our time here has been a journey of self-discovery. Now, let's share our light with the world, illuminating the path for others.",
    "From the classroom to the world stage, let's take what we've learned and change the game. We're ready, class of innovators.",
    "May the memories of these years fuel our ambitions, and the lessons guide our steps. Onwards, to a future we'll shape together.",
    "College, where we found our voices. Now, let's raise them loud and clear, making the world listen to our ideas and dreams.",
    "As we say our goodbyes, let's promise to keep in touch. Life is a journey best shared, even when paths diverge.",
    "We've grown, we've learned, we've become. Now, let's show the world who we are and what we're capable of, graduates.",
    "The world is full of opportunities, waiting for us to seize them. Let's go out there and make our mark, one achievement at a time.",
    "Here's to the friendships that transcend time and space, the lessons that shape our souls, and the dreams that guide our way.",
    "Our journey here might be over, but the impact we can make is just beginning. Go forth, class of change-makers.",
    "The future belongs to those who dare. Let's dare to dream, to love, to live fully, and to make a difference.",
    "From students to leaders, our transformation is complete. Now, let's lead with compassion and wisdom, inspiring others along the way.",
    "College gave us roots, now let's spread our wings. Fly high, graduates, towards horizons unexplored.",
    "Our time here was a story of growth, now it's time to write our epics. May our pens be filled with the ink of passion and purpose.",
    "As we graduate, let's remember that the greatest lessons aren't always in books. They're in the connections we make, the hearts we touch.",
    "With diplomas in hand and dreams in heart, let’s step boldly into the world, ready to make every tomorrow better than today.",
    "The campus may fade into the rearview mirror, but the friendships and lessons we’ve gained will steer us through life’s journey.",
    "Our college days may end, but the stories we’ve woven together will last a lifetime. Carry them with pride, class of storytellers.",
    "As we disperse into the world, let our unity be an unwavering beacon, reminding us of the strength we found in each other.",
    "From textbooks to life’s biggest tests, we’re equipped to excel. Here’s to acing the future, one challenge at a time.",
    "The future is an unwritten book; we are its authors. Let’s fill the pages with adventures, successes, and learnings aplenty.",
    "As we part ways, remember, it’s not about the destination but the journey. Make yours memorable, class of adventurers.",
    "Our time here has been a symphony of growth. Now, let each of us compose our own melodies, harmonious and unique.",
    "The world needs dreamers and doers. With our education as a compass, let’s be both, shaping a brighter tomorrow.",
    "College, where we found our tribe. Though paths diverge, our bond remains, a testament to the power of connection.",
    "We’ve laughed, we’ve learned, we’ve grown. Now, let’s take these gifts and sprinkle them across the world, making it a little brighter.",
    "As we graduate, let’s not forget the magic of beginnings. Embrace every new start with the same enthusiasm we had on day one.",
    "Our education is a gift that keeps on giving. Let’s pay it forward, uplifting others with the knowledge and kindness we’ve received.",
    "The end of college marks the start of endless possibilities. Let’s dive in headfirst, embracing the unknown with open hearts.",
    "To the friends who became family, thank you for coloring our college years. Wherever life takes us, we’ll always find our way back.",
    "We’re not just leaving with degrees, but with a wealth of experiences that have shaped us. Let’s cherish them as we step into the world.",
    "From classrooms to boardrooms, lecture halls to the world stage, may our journey be filled with purpose and fulfillment.",
    "As we graduate, let’s celebrate not just our achievements, but also the resilience that carried us through tough times.",
    "College, where we discovered the power of ‘yet’. Whatever we don’t know, we will learn. Our journey of growth continues.",
    "Let’s carry forward the spirit of inquiry, the love for learning, and the warmth of our college memories into every endeavor.",
    "Our time here has been a launchpad. Now, let’s soar high, reaching for the stars, knowing we have each other’s backs.",
    "The world awaits our ideas, our passion, our impact. Let’s make sure it hears us roar, graduates of determination.",
    "From theory to practice, dreams to reality, we’re ready. Here’s to building a future that reflects the best of our education.",
    "College gave us roots, wings, and a sky full of stars. It’s up to us to fly, chase those stars, and illuminate our own paths.",
    "As we conclude this chapter, remember, every ending is a new beginning. Let’s write our next chapters with hope and courage.",
    "Our journey here was a masterpiece of learning and friendship. Now, let’s create masterpieces in every aspect of our lives.",
    "The future is an open road, and we hold the keys. Drive confidently, graduates, knowing the journey ahead is yours to navigate.",
    "College was the crucible that forged us. Now, let’s be the steel that strengthens the world, resilient and true.",
    "To the professors who inspired, the friends who supported, and the experiences that shaped us—thank you. We’re ready to shine.",
    "Our time here was a dance of knowledge and camaraderie. As we exit the stage, let’s keep dancing to the rhythm of our dreams.",
    "The world needs more dreamers who do. Let’s be that change, graduates, turning our education into action for a better world.",
    "College wasn’t just about getting a degree; it was about finding ourselves. Let’s take that self-knowledge and conquer the world.",
    "As we graduate, let’s promise to keep learning, growing, and inspiring. The world is our canvas, and we hold the brush.",
    "The memories we’ve made are the foundation upon which we build our futures. Let’s construct something magnificent, class of architects.",
    "We came as individuals, we leave as a constellation, each star shining brightly in our own sky. Goodbye for now, until we meet again."
]

const MsgScrollComp = () => {
    const [isScrolling] = useState(true);
    useEffect(() => {
        const messageContainer = document.querySelector('.message-container');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && isScrolling) {
                        messageContainer.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 1.0 }
        );

        if (messageContainer) {
            observer.observe(messageContainer.lastElementChild);
        }

        return () => {
            if (messageContainer) {
                observer.unobserve(messageContainer.lastElementChild);
            }
        };
    }, [isScrolling]);

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className="message-container">
            {messages.map((msg, index) => (
                <div key={index}>
                    <div className="message-header">
                        <img src={'https://img2.baidu.com/it/u=2992416625,3705473097&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'} alt={`Avatar of ${index}`} className="avatar" />
                        <div className="time">{formatDate(new Date())}</div>
                    </div>
                    <div className="message-bubble">
                        {msg}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MsgScrollComp;
