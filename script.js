document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
        const userInput = document.getElementById("user-input");
        const sendButton = document.getElementById("send-button");
    
        sendButton.addEventListener("click", sendMessage);
        function sendMessage() {
            const message = userInput.value.trim();
            if (message !== "") {
                appendMessage(message, "user");
                userInput.value = "";
                if (message.toLowerCase() === "hi") {
    
                    setTimeout(function () {
                        appendMessage("<br><br> 1. Canva Pro:<br>- Monthly Subscription: $12.95 per month<br>- Annual Subscription: $9.95 per month (billed annually at $119.40)<br><br>2. Netflix Subscription:<br> - Basic Plan: $8.99 per month<br> - Standard Plan: $13.99 per month<br> - Premium Plan: $17.99 per month<br><br>3. Social Media Services:<br>- Facebook:<br>&nbsp;&nbsp;- Free: Basic profile setup, posting, and interaction with friends.<br>&nbsp;&nbsp;- Paid Advertising: Various pricing options based on campaign objectives and audience targeting.<br><br>- Instagram:<br>&nbsp;&nbsp;- Free: Basic profile setup, posting photos and stories, and interacting with followers.<br>&nbsp;&nbsp;- Instagram Ads: Pricing varies based on ad format, targeting options, and campaign goals.<br><br>- Twitter:<br>&nbsp;&nbsp;- Free: Basic profile setup, tweeting, retweeting, and engaging with followers.<br>&nbsp;&nbsp;- Twitter Ads: Pricing depends on ad objectives, targeting criteria, and bidding strategy.", "bot");
                    }, 2600);
                    setTimeout(function () {
                        showQuestions();
                    }, 16000);
                    setTimeout(function () {
                        appendMessage("How can I assist you today?", "bot");
                    }, 1000);
                  } else {
                    setTimeout(function(){
                    appendMessage("I'm sorry, but I don't know what you mean, Type hi to show more...", "bot");
                  }, 1000);
                }   
            }
        }
    
        function appendMessage(message, sender) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.classList.add(sender + "-message");
            
            chatMessages.appendChild(messageElement);
    
           

            if (sender === "user" && chatMessages.lastChild.classList.contains("bot-message")) {
                chatMessages.insertBefore(messageElement, chatMessages.lastChild.nextSibling);
            } else {
                chatMessages.appendChild(messageElement);
            }
            
    
            // استخدام Typed.js لكتابة الرسالة حرفًا بحرف
            new Typed(messageElement, {
                strings: [message],
                typeSpeed: 5, // سرعة الكتابة بالمللي ثانية
                showCursor: false, // عرض مؤشر الكتابة
                onComplete: function (self) {
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    if (sender === "bot") {
                        const lineBreak = document.createElement("br");
                        chatMessages.appendChild(lineBreak);
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                        if (sender === "bot") {
                            const lineBreak = document.createElement("br");
                            chatMessages.appendChild(lineBreak);
                        }
                    }
                    readMessage(message);
                    speakArabic(text) 

                }
            });
        }

       
        function readMessage(message) {

            // تنفيذ الكود لإزالة الرموز HTML غير المرغوب فيها
            message = removeHtmlEntities(message);

            // تقسيم النص إلى جمل بحيث لا تشمل علامات الترقيم والفواصل والنقاط وغيرها من العلامات
            const paragraphs = message.split(/<br><br>/).filter(paragraph => paragraph.trim() !== '');
        
            // قراءة كل فقرة بصوت متأني
            paragraphs.forEach(paragraph => {
                // تقليل السرعة وتعديل النبرة حسب الحاجة
                setTimeout(function() {
                    if ('speechSynthesis' in window) {
                        const utterance = new SpeechSynthesisUtterance(paragraph);
                        
                        // ضبط السرعة والنبرة ومستوى الصوت
                        utterance.rate = 0.8; // تخفيض السرعة
                        utterance.pitch = 1; // النبرة الطبيعية
                        utterance.volume = 1; // مستوى الصوت القياسي
        
                        window.speechSynthesis.speak(utterance);
                    }
                }, 500); // قراءة كل فقرة بعد ثانية واحدة من انتهاء الفقرة السابقة
            });
        }
        function removeHtmlEntities(text) {
            // استبدال جميع الـ &nbsp; بمسافات فارغة
            return text.replace(/&nbsp;/g, ' ');
        }
         
        function speakArabic(text) {
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.lang = 'ar-EG'; // تعيين اللغة العربية
            
            // تشغيل الصوت
            window.speechSynthesis.speak(speech);
        }
        
        // اختبار الدالة
        speakArabic("مرحبا، كيف حالك اليوم؟");
        
        


        setTimeout(function () {
            appendMessage("👋 Welcome to our Internet Services Bot! I'm thrilled to have you here! As your dedicated bot, I'm here to assist you with exploring and subscribing to amazing online services, that will elevate your digital experience. Whether you're interested in streaming your favorite movies and TV shows on Netflix, unleashing your creativity with Canva Pro, or boosting your online presence with social media services, I've got you covered! Feel free to browse through our services and let me know if you have any questions or need assistance. Your digital journey starts now! 🚀,Type hi to get more...", "bot");
        }, 400);
        function showQuestions() {
            const questions = [
                "What are the benefits of subscribing to Canva Pro?",
                "How can I promote my business effectively on social media?",
                "What are some popular Netflix originals to recommend to users?",
                "How can I increase my followers on social media platforms?",
                "Is it possible to customize designs on Canva Pro?",
                "What are some effective ways to engage with my audience on social media?"
            ];
    
            const  questionsConntainer = document.getElementById("questions-container");
            questions.forEach(function (question) {
                const questionElement = document.createElement("button");
                questionElement.classList.add("message");
                questionElement.classList.add("bot-message");
                questionElement.classList.add("question")
                questionElement.textContent = question;
    
                
                questionElement.addEventListener("click", function () {
                    getAnswer(question);
                });
              
                (document.getElementById("chat-messages")).appendChild(questionElement);
                (document.getElementById("chat-messages")).scrollTop = (document.getElementById("chat-messages")).scrollHeight;
            });
    
        }
    
        function getAnswer(question) {
            let answer = "";
            let imageUrl = "";
            switch (question) {
                case "What are the benefits of subscribing to Canva Pro?":
                    answer = "Canva Pro offers advanced features like unlimited storage, access to premium templates, and the ability to create transparent backgrounds. It's ideal for businesses and professionals looking to enhance their design capabilities.";
                    imageUrl = "canva.jpg";
                    break;
                case "How can I promote my business effectively on social media?":
                    answer = "To effectively promote your business on social media, you should create engaging content, interact with your audience regularly, use relevant hashtags, and analyze your performance metrics to optimize your strategy.";
                    imageUrl = "marketing.jpg";
                    break;
                case "What are some popular Netflix originals to recommend to users?":
                    answer = "Some popular Netflix originals include 'Stranger Things,' 'The Crown,' 'Money Heist,' and 'The Witcher.' These shows have gained widespread popularity and are highly recommended for binge-watching.";
                    imageUrl = "Netflix.jpg";
                    break;
                case "How can I increase my followers on social media platforms?":
                    answer = "To increase your followers on social media, you can regularly post high-quality content, engage with your audience by responding to comments and messages, collaborate with influencers or other brands, and use relevant hashtags to expand your reach.";
                    imageUrl = "followers.jpeg";
                    break;
                case "Is it possible to customize designs on Canva Pro?":
                    answer = "Yes, Canva Pro allows for extensive customization of designs. Users can upload their own images, access premium elements like illustrations and icons, and customize templates to suit their branding and design needs.";
                    imageUrl = "gift.jpeg";
                    break;
                case "What are some effective ways to engage with my audience on social media?":
                    answer = "You can engage with your audience on social media by asking questions, running polls, hosting live Q&A sessions, sharing user-generated content, and responding to comments and messages in a timely manner.";
                    imageUrl = "movie.jpg";
                    break;
                default:
                    answer = "I'm sorry, I don't have an answer to that question.";
            }
    
    
    
            appendMessage(answer, "bot");
            setTimeout(function () {
                appendDelayedImage(imageUrl);
            }, 1000); // تأخير عرض الصورة بعد الجواب بمقدار ثانية واحدة
        }
    
        function appendDelayedImage(imageSrc) {
            
            const imageElement = document.createElement("img");
            imageElement.src = imageSrc;
            imageElement.classList.add("delayed-image");
            imageElement.style.opacity = "0";
    
            chatMessages.appendChild(imageElement);
           
           
            setTimeout(function () {
                imageElement.style.opacity = "1";
                // Move image below the answer
                imageElement.style.marginTop = "10px";
                chatMessages.scrollTop = chatMessages.scrollHeight;
                imageElement.classList.add('show-image');
            }, 1000);
        }
     });

