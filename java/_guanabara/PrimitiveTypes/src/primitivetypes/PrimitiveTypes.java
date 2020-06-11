package primitivetypes;

import java.util.Scanner;

public class PrimitiveTypes {

  public static void main(String[] args) {
    
    // Data output

    String name = "Renato";
    float score = 89.5f;    
    
    System.out.println("Your score is " + score);
    System.out.printf("Your score is %f \n", score);
    System.out.printf("Your score is %.2f \n", score);
    System.out.printf("Hi %s, your score is %.2f \n", name, score);
    System.out.format("Hi %s, your score is %.2f \n", name, score);
    
    // Data input 
    
    Scanner keyboard = new Scanner(System.in);

    System.out.print("Type the surname: ");
    String surname = keyboard.nextLine();
    
    System.out.print("Type the bonus: ");
    float bonus = keyboard.nextFloat();

    System.out.format("Hi %s %s, your score is %.2f + %.2f \n", name, surname, score, bonus);
    
  }
  
}
