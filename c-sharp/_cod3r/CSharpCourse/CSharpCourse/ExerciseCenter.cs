using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpCourse
{
    public class ExerciseCenter {
        Dictionary<string, Action> Exercises;

        public ExerciseCenter(Dictionary<string, Action> exercises) {
            Exercises = exercises;    
        }

        public void SelectAndExec() {
            int i = 1;

            foreach (var exercise in Exercises) {
                Console.WriteLine("{0}) {1}", i, exercise.Key);
                i++;
            }

            Console.Write("Write a number (or leave empty for the last) ");

            int.TryParse(Console.ReadLine(), out int num);
            bool validNumber = num > 0 && num <= Exercises.Count;
            num = validNumber ? num - 1 : Exercises.Count - 1;

            string exerciseName = Exercises.ElementAt(num).Key;

            Console.Write("\nRunning exercise ");
            Console.BackgroundColor = ConsoleColor.Yellow;
            Console.ForegroundColor = ConsoleColor.Black;
            Console.WriteLine(exerciseName);
            Console.ResetColor();

            Console.WriteLine(String.Concat(Enumerable.Repeat("=", exerciseName.Length + 21)) + "\n");

            Action exec = Exercises.ElementAt(num).Value;
            try {
                exec();
            } catch(Exception e) {
                Console.BackgroundColor = ConsoleColor.Red;
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("An error occurred: {0}", e.Message);
                Console.ResetColor();

                Console.WriteLine(e.StackTrace);
            }
        }
    }
}
