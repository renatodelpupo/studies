package oop.composition;

import java.util.ArrayList;
import java.util.List;

public class Course {

	final String name;
	final List<Student> students = new ArrayList<>();

	Course(String name) {
		this.name = name;
	}

	void addStudent(Student student) {
		this.students.add(student);
		student.courses.add(this);
	}
}
