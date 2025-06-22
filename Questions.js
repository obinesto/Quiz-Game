export default function QuestionBank() {
    const questionBank = [
        // ========== SPORTS ==========
        {
            id: 1,
            category: 'Sports',
            question: 'Which club has won the most UEFA Champions League titles?',
            options: ['Barcelona', 'AC Milan', 'Real Madrid', 'Bayern Munich'],
            answer: 'Real Madrid',
            answered: false
        },
        {
            id: 2,
            category: 'Sports',
            question: 'Who won the 2022 FIFA World Cup?',
            options: ['France', 'Argentina', 'Brazil', 'Germany'],
            answer: 'Argentina',
            answered: false
        },
        {
            id: 3,
            category: 'Sports',
            question: 'Which athlete holds the 100m world record (9.58 seconds)?',
            options: ['Tyson Gay', 'Usain Bolt', 'Yohan Blake', 'Asafa Powell'],
            answer: 'Usain Bolt',
            answered: false
        },
        {
            id: 4,
            category: 'Sports',
            question: 'Which country hosted the 2016 Summer Olympics?',
            options: ['Japan', 'China', 'Brazil', 'UK'],
            answer: 'Brazil',
            answered: false
        },
        {
            id: 5,
            category: 'Sports',
            question: 'In tennis, how many Grand Slam titles does Serena Williams have?',
            options: ['21', '23', '25', '27'],
            answer: '23',
            answered: false
        },
        {
            id: 6,
            category: 'Sports',
            question: 'Which NBA player has the most career points?',
            options: ['Michael Jordan', 'LeBron James', 'Kobe Bryant', 'Kareem Abdul-Jabbar'],
            answer: 'LeBron James',
            answered: false
        },
        {
            id: 7,
            category: 'Sports',
            question: 'What is the most-watched sport in the world?',
            options: ['Cricket', 'Basketball', 'Soccer (Football)', 'Tennis'],
            answer: 'Soccer (Football)',
            answered: false
        },
        {
            id: 8,
            category: 'Sports',
            question: 'Which country won the first-ever Cricket World Cup in 1975?',
            options: ['Australia', 'West Indies', 'England', 'India'],
            answer: 'West Indies',
            answered: false
        },
        {
            id: 9,
            category: 'Sports',
            question: 'Who is the all-time top scorer in the UEFA Champions League?',
            options: ['Lionel Messi', 'Cristiano Ronaldo', 'Robert Lewandowski', 'Karim Benzema'],
            answer: 'Cristiano Ronaldo',
            answered: false
        },
        {
            id: 10,
            category: 'Sports',
            question: 'Which boxer was known as "The Greatest"?',
            options: ['Mike Tyson', 'Muhammad Ali', 'Floyd Mayweather', 'Sugar Ray Leonard'],
            answer: 'Muhammad Ali',
            answered: false
        },

        // ========== SCIENCE & TECH ==========
        {
            id: 11,
            category: 'Science & Tech',
            question: 'What is the chemical symbol for gold?',
            options: ['Go', 'Gd', 'Au', 'Ag'],
            answer: 'Au',
            answered: false
        },
        {
            id: 12,
            category: 'Science & Tech',
            question: 'Which planet is known as the "Red Planet"?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            answer: 'Mars',
            answered: false
        },
        {
            id: 13,
            category: 'Science & Tech',
            question: 'Who invented the telephone?',
            options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Albert Einstein'],
            answer: 'Alexander Graham Bell',
            answered: false
        },
        {
            id: 14,
            category: 'Science & Tech',
            question: 'What does "AI" stand for?',
            options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Interface', 'Algorithmic Inference'],
            answer: 'Artificial Intelligence',
            answered: false
        },
        {
            id: 15,
            category: 'Science & Tech',
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
            answer: 'Nitrogen',
            answered: false
        },
        {
            id: 16,
            category: 'Science & Tech',
            question: 'What is the hardest natural substance on Earth?',
            options: ['Gold', 'Iron', 'Diamond', 'Graphite'],
            answer: 'Diamond',
            answered: false
        },
        {
            id: 17,
            category: 'Science & Tech',
            question: 'Who developed the theory of relativity?',
            options: ['Isaac Newton', 'Stephen Hawking', 'Albert Einstein', 'Galileo Galilei'],
            answer: 'Albert Einstein',
            answered: false
        },
        {
            id: 18,
            category: 'Science & Tech',
            question: 'Which company created the iPhone?',
            options: ['Samsung', 'Google', 'Apple', 'Microsoft'],
            answer: 'Apple',
            answered: false
        },
        {
            id: 19,
            category: 'Science & Tech',
            question: 'What is the main component of the Sun?',
            options: ['Liquid Lava', 'Hydrogen', 'Oxygen', 'Carbon'],
            answer: 'Hydrogen',
            answered: false
        },
        {
            id: 20,
            category: 'Science & Tech',
            question: 'What does "HTTP" stand for?',
            options: ['HyperText Transfer Protocol', 'High-Tech Text Processing', 'Hyperlink Text Technology', 'Home Tool Transfer Program'],
            answer: 'HyperText Transfer Protocol',
            answered: false
        },

        // ========== GEOGRAPHY ==========
        {
            id: 21,
            category: 'Geography',
            question: 'What is the capital of Germany?',
            options: ['Munich', 'Berlin', 'Hamburg', 'Frankfurt'],
            answer: 'Berlin',
            answered: false
        },
        {
            id: 22,
            category: 'Geography',
            question: 'Which country is the largest by land area?',
            options: ['USA', 'China', 'Canada', 'Russia'],
            answer: 'Russia',
            answered: false
        },
        {
            id: 23,
            category: 'Geography',
            question: 'Which river is the longest in the world?',
            options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
            answer: 'Nile',
            answered: false
        },
        {
            id: 24,
            category: 'Geography',
            question: 'What is the smallest continent?',
            options: ['Africa', 'Europe', 'Australia', 'Antarctica'],
            answer: 'Australia',
            answered: false
        },
        {
            id: 25,
            category: 'Geography',
            question: 'Which desert is the largest in the world?',
            options: ['Sahara', 'Gobi', 'Kalahari', 'Arabian'],
            answer: 'Sahara',
            answered: false
        },
        {
            id: 26,
            category: 'Geography',
            question: 'Which country is home to the kangaroo?',
            options: ['New Zealand', 'South Africa', 'Australia', 'Brazil'],
            answer: 'Australia',
            answered: false
        },
        {
            id: 27,
            category: 'Geography',
            question: 'What is the capital of Japan?',
            options: ['Osaka', 'Kyoto', 'Tokyo', 'Seoul'],
            answer: 'Tokyo',
            answered: false
        },
        {
            id: 28,
            category: 'Geography',
            question: 'Which mountain is the highest in the world?',
            options: ['K2', 'Kilimanjaro', 'Everest', 'Makalu'],
            answer: 'Everest',
            answered: false
        },
        {
            id: 29,
            category: 'Geography',
            question: 'Which ocean is the largest?',
            options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
            answer: 'Pacific',
            answered: false
        },
        {
            id: 30,
            category: 'Geography',
            question: 'Which African country was never colonized?',
            options: ['Ethiopia', 'Nigeria', 'South Africa', 'Egypt'],
            answer: 'Ethiopia',
            answered: false
        },

        // ========== HISTORY ==========
        {
            id: 31,
            category: 'History',
            question: 'Who was the first President of the United States?',
            options: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington', 'John Adams'],
            answer: 'George Washington',
            answered: false
        },
        {
            id: 32,
            category: 'History',
            question: 'Which year did World War II end?',
            options: ['1943', '1945', '1950', '1939'],
            answer: '1945',
            answered: false
        },
        {
            id: 33,
            category: 'History',
            question: 'Who is credited with discovering America?',
            options: ['Christopher Columbus', 'Vasco da Gama', 'James Cook', 'Ferdinand Magellan'],
            answer: 'Christopher Columbus',
            answered: false
        },
        {
            id: 34,
            category: 'History',
            question: 'Which ancient civilization built the pyramids?',
            options: ['Greeks', 'Romans', 'Egyptians', 'Mayans'],
            answer: 'Egyptians',
            answered: false
        },
        {
            id: 35,
            category: 'History',
            question: 'Who wrote the "Declaration of Independence"?',
            options: ['Benjamin Franklin', 'Thomas Jefferson', 'John Adams', 'George Washington'],
            answer: 'Thomas Jefferson',
            answered: false
        },
        {
            id: 36,
            category: 'History',
            question: 'Which empire was ruled by Genghis Khan?',
            options: ['Ottoman', 'Mongol', 'Roman', 'Persian'],
            answer: 'Mongol',
            answered: false
        },
        {
            id: 37,
            category: 'History',
            question: 'When did the Berlin Wall fall?',
            options: ['1985', '1989', '1991', '1975'],
            answer: '1989',
            answered: false
        },
        {
            id: 38,
            category: 'History',
            question: 'Who was the first woman to win a Nobel Prize?',
            options: ['Marie Curie', 'Mother Teresa', 'Rosalind Franklin', 'Jane Goodall'],
            answer: 'Marie Curie',
            answered: false
        },
        {
            id: 39,
            category: 'History',
            question: 'Which war was fought between North and South Korea?',
            options: ['Vietnam War', 'Korean War', 'Cold War', 'World War I'],
            answer: 'Korean War',
            answered: false
        },
        {
            id: 40,
            category: 'History',
            question: 'Who was the last Tsar of Russia?',
            options: ['Ivan the Terrible', 'Peter the Great', 'Nicholas II', 'Vladimir Lenin'],
            answer: 'Nicholas II',
            answered: false
        },

        // ========== ENTERTAINMENT ==========
        {
            id: 41,
            category: 'Entertainment',
            question: 'Who played Jack in "Titanic"?',
            options: ['Brad Pitt', 'Tom Cruise', 'Leonardo DiCaprio', 'Johnny Depp'],
            answer: 'Leonardo DiCaprio',
            answered: false
        },
        {
            id: 42,
            category: 'Entertainment',
            question: 'Which singer is known as the "Queen of Pop"?',
            options: ['Beyoncé', 'Madonna', 'Taylor Swift', 'Rihanna'],
            answer: 'Madonna',
            answered: false
        },
        {
            id: 43,
            category: 'Entertainment',
            question: 'What is the highest-grossing movie of all time?',
            options: ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars: The Force Awakens'],
            answer: 'Avatar',
            answered: false
        },
        {
            id: 44,
            category: 'Entertainment',
            question: 'Who wrote "Harry Potter"?',
            options: ['J.R.R. Tolkien', 'Stephen King', 'J.K. Rowling', 'George R.R. Martin'],
            answer: 'J.K. Rowling',
            answered: false
        },
        {
            id: 45,
            category: 'Entertainment',
            question: 'Which band sang "Bohemian Rhapsody"?',
            options: ['The Beatles', 'Led Zeppelin', 'Queen', 'Pink Floyd'],
            answer: 'Queen',
            answered: false
        },
        {
            id: 46,
            category: 'Entertainment',
            question: 'Who directed "The Dark Knight"?',
            options: ['Steven Spielberg', 'Christopher Nolan', 'Quentin Tarantino', 'Martin Scorsese'],
            answer: 'Christopher Nolan',
            answered: false
        },
        {
            id: 47,
            category: 'Entertainment',
            question: 'Which actor played Iron Man in the MCU?',
            options: ['Chris Evans', 'Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
            answer: 'Robert Downey Jr.',
            answered: false
        },
        {
            id: 48,
            category: 'Entertainment',
            question: 'What is the fictional continent in "Game of Thrones"?',
            options: ['Middle-earth', 'Westeros', 'Narnia', 'Hogwarts'],
            answer: 'Westeros',
            answered: false
        },
        {
            id: 49,
            category: 'Entertainment',
            question: 'Who painted "The Starry Night"?',
            options: ['Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 'Salvador Dalí'],
            answer: 'Vincent van Gogh',
            answered: false
        },
        {
            id: 50,
            category: 'Entertainment',
            question: 'Who is the highest-paid actor of all time?',
            options: ['Tom Cruise', 'Dwayne Johnson', 'Robert Downey Jr.', 'Jackie Chan'],
            answer: 'Dwayne Johnson',
            answered: false
        },

        // ========== GENERAL KNOWLEDGE ==========
        {
            id: 51,
            category: 'General Knowledge',
            question: 'What is the currency of Japan?',
            options: ['Won', 'Yen', 'Dollar', 'Euro'],
            answer: 'Yen',
            answered: false
        },
        {
            id: 52,
            category: 'General Knowledge',
            question: 'Which animal is the fastest on land?',
            options: ['Lion', 'Cheetah', 'Leopard', 'Horse'],
            answer: 'Cheetah',
            answered: false
        },
        {
            id: 53,
            category: 'General Knowledge',
            question: 'What is the largest mammal in the world?',
            options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
            answer: 'Blue Whale',
            answered: false
        },
        {
            id: 54,
            category: 'General Knowledge',
            question: 'Which language is the most widely spoken?',
            options: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'],
            answer: 'Mandarin Chinese',
            answered: false
        },
        {
            id: 55,
            category: 'General Knowledge',
            question: 'Who is the current CEO of Tesla (2024)?',
            options: ['Jeff Bezos', 'Elon Musk', 'Mark Zuckerberg', 'Tim Cook'],
            answer: 'Elon Musk',
            answered: false
        },
        {
            id: 56,
            category: 'General Knowledge',
            question: 'Which planet is closest to the Sun?',
            options: ['Venus', 'Earth', 'Mercury', 'Mars'],
            answer: 'Mercury',
            answered: false
        },
        {
            id: 57,
            category: 'General Knowledge',
            question: 'What is the largest organ in the human body?',
            options: ['Liver', 'Brain', 'Skin', 'Heart'],
            answer: 'Skin',
            answered: false
        },
        {
            id: 58,
            category: 'General Knowledge',
            question: 'Which country invented tea?',
            options: ['India', 'China', 'UK', 'Japan'],
            answer: 'China',
            answered: false
        },
        {
            id: 59,
            category: 'General Knowledge',
            question: 'How many continents are there?',
            options: ['5', '6', '7', '8'],
            answer: '7',
            answered: false
        },
        {
            id: 60,
            category: 'General Knowledge',
            question: 'What is the most consumed beverage in the world (after water)?',
            options: ['Coffee', 'Beer', 'Tea', 'Soda'],
            answer: 'Tea',
            answered: false
        }
    ];
    
    return questionBank;
}