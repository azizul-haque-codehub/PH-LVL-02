Big O বলে দেয় —

ইনপুট সাইজ বাড়লে (n বাড়লে) প্রোগ্রামটির রানিং টাইম বা মেমরি ব্যবহার কীভাবে বাড়ে।

এটা একটা worst-case measurement, মানে সবচেয়ে খারাপ অবস্থায় কত সময় লাগতে পারে।
## ⚡ সবচেয়ে সাধারণ Big O নোটেশনসমূহ:
| নোটেশন         | নাম          | ব্যাখ্যা                                             |
| -------------- | ------------ | ---------------------------------------------------- |
| **O(1)**       | Constant     | ইনপুট বাড়লেও **সময় একই** থাকে                            |
| **O(log n)**   | Logarithmic  | ইনপুট দ্বিগুণ হলে কাজ অল্প বাড়ে (যেমন Binary Search) |
| **O(n)**       | Linear       | ইনপুট বাড়লে সময়ও সরলভাবে বাড়ে                        |
| **O(n log n)** | Linearithmic | যেমন Merge Sort, Quick Sort                          |
| **O(n²)**      | Quadratic    | nested loops                                         |
| **O(2ⁿ)**      | Exponential  | যেমন recursive Fibonacci                             |
| **O(n!)**      | Factorial    | যেমন permutation generation                          |

## Graph
│
│           O(n²)
│           /
│          /
│         /
│        /
│       /       O(n)
│      /       /
│     /       /
│    /       /
│   /       /
│  /       /
│ /       /
│/____________________ n (input size)
   O(1)
