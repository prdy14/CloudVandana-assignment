import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {
    public static int romanToInt(String s) {
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int currValue = romanMap.containsKey(s.charAt(i)) ? romanMap.get(s.charAt(i)) : 0;
            if(currValue == 0){
                return -1;
            }
            if (currValue < prevValue) {
                result -= currValue;
            } else {
                result += currValue;
            }
            
            prevValue = currValue;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String romanNumeral = sc.next(); 
        int integerEquivalent = romanToInt(romanNumeral);
        if(integerEquivalent==-1){
            System.out.println("Invalid Roman Number");
        }
        else{
        System.out.println(romanNumeral + " = " + integerEquivalent);
        }
    }
}
