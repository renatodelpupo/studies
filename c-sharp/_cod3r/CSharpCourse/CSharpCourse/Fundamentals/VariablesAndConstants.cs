using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpCourse.Fundamentals
{
    class VariablesAndConstants
    {
        public static void Exec()
        {
            double radius = 4.5;
            const double PI = 3.14;

            radius = 5.5;
            // PI = 3.1415;

            double area = PI * radius * radius;
            Console.WriteLine("The area is " + area);

            // internal types

            bool isRaining = true;
            Console.WriteLine("It's raining? " + isRaining);

            byte age = 45;
            Console.WriteLine("Age " + age);

            sbyte goalsSum = sbyte.MinValue;
            Console.WriteLine("Goals sum: " + goalsSum);

            short wage = short.MaxValue;
            Console.WriteLine("Wage: " + wage);

            int intMinValue = int.MinValue;
            Console.WriteLine("Int min value:" + intMinValue);

            uint brazilianPopulation = 207_600_000;
            Console.WriteLine("Brazilian population: " + brazilianPopulation);

            long longMinValue = long.MinValue;
            Console.WriteLine("Long min value: " + longMinValue);

            ulong worldPopulation = 7_600_000_000;
            Console.WriteLine("World population: " + worldPopulation);

            float computerPrice = 1299.99f;
            Console.WriteLine("Computer price: " + computerPrice);

            double appleMarketValue = 1_000_000_000_000.00;
            Console.WriteLine("Apple value: " + appleMarketValue);

            decimal starsDistance = decimal.MaxValue;
            Console.WriteLine("Stars distance: " + starsDistance);

            char letter = 'A';
            Console.WriteLine("Letter: " + letter);

            string text = "Welcome to the course";
            Console.WriteLine(text);
        }
    }
}
