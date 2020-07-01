package oop.composition;

public class CourseExample {

	public static void main(String[] args) {

		Student student1 = new Student("John");
		Student student2 = new Student("Mary");
		Student student3 = new Student("Lucy");

		Course course1 = new Course("Java");
		Course course3 = new Course("Vue");
		Course course2 = new Course("Web");

		course1.addStudent(student1);
		course1.addStudent(student2);

		course2.addStudent(student1);
		course2.addStudent(student3);

		student1.addCourse(course3);
		student2.addCourse(course3);
		student3.addCourse(course3);

		Course courseToMatch = course3;
		for (Student student : courseToMatch.students) {
			System.out.println("My name is " + student.name + " and I'm doing " + courseToMatch.name + "\n");
		}

		System.out.println(student1.courses.get(0).students);
		System.out.print("\n");

		Course foundCourse = student1.getCourseByName("Java");
		if (foundCourse != null) {
			System.out.println(foundCourse.name);
			System.out.println(foundCourse.students);
		}
	}
}
