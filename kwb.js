const results = [
    "Know your worth! You deserve great things in life!",
    "Keep up the great work! Your progress will turn into something that you can be proud of!",
    "You can achieve anything! Don't lose sight of your goal!",
    "Believe in yourself! You are a person capable of doing fantastic things in life!",
    "You are loved!",
    "I'm so proud of you!",
    "Tap into your creative side! Art can be really freeing, and I bet you'll make something awesome!",
    "Your smile lights up any room you enter!",
    "You are a ray of sunshine on a cloudy day!",
    "Never stop going! Never give up!",
    "Great things are coming your way! Keep your chin up!",
    "Practice means progress! Keep putting your time and energy into the things you want to improve in, you'll get the results you want soon enough!",
    "There’s a special beauty about you that’s hard to miss!",
    "Surround yourself with people who you enjoy spending time with!",
    "Go spend some time outside! I know it might sound silly, but there's a lot of beauty in nature that we tend to miss!",
    "I hope your days are filled with happiness and love.",
    "I hope that you can laugh and smile with people who make you happy."
];

document.getElementById("button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * results.length);
    alert(results[randomIndex]);
});