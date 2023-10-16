#include<iostream>
#include <unordered_map>
#include <map>
using namespace std;

int romanTointeger(string str){
    unordered_map<char, int> m
            = { { 'I', 1 },   { 'V', 5 },   { 'X', 10 },
                { 'L', 50 },  { 'C', 100 }, { 'D', 500 },
                { 'M', 1000 } };

        int sum = 0;
        int n=str.length();
        for (int i = 0; i < n; i++) {
            if (m[str[i]] < m[str[i + 1]]) {
                sum += m[str[i + 1]] - m[str[i]];
                i++;
                continue;
            }
            sum += m[str[i]];
        }
        return sum;
}
int main() {
    string str;
    getline(cin,str);

    cout<<romanTointeger(str);
    return 0;

}