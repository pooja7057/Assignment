import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();

        Employee emp1 = new Employee(101, "Bob", 5000.0);
        Employee emp2 = new Employee(102, "Jimmy", 10000.0);
        Employee emp3 = new Employee(103, "Jerry", 7500.0);

        
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        
        for (Employee employee : employees) {
            employee.displayDetails();
        }
    }
}