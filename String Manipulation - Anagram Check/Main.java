import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str1 = scanner.nextLine();
        String str2 = scanner.nextLine();

        if (areAnagrams(str1, str2)) {
            System.out.println("strings are anagrams.");
        } else {
            System.out.println("strings are not anagrams.");
        }

        scanner.close();
    }

    public static boolean areAnagrams(String str1, String str2) {
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();
        if (str1.length() != str2.length()) {
            return false;
        }

        int[] cnt1 = new int[128];
        int[] cnt2 = new int[128];

        for (int i = 0; i < str1.length(); i++) {
            cnt1[str1.charAt(i)]++;
        }

        for (int i = 0; i < str2.length(); i++) {
            cnt2[str2.charAt(i)]++;
        }

        for (int i = 0; i < 128; i++) {
            if (cnt1[i] != cnt2[i]) {
                return false;
            }
        }
        return true;
    }
}