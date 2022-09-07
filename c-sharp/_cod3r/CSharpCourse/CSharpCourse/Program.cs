using System;
using System.Collections.Generic;

using CSharpCourse.Fundamentals;

namespace CSharpCourse
{
    class Program {
        static void Main(string[] args) {
            var center = new ExerciseCenter(new Dictionary<string, Action>() {
                {"First Program - Fundamentals", FirstProgram.Exec},
            });

            center.SelectAndExec();
        }
    }
}