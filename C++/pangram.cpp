#include<iostream>
using namespace std;

bool checkPangram(string str){
    int c[26]={0};
    for(char ch:str)
    {
        c[ch-'a']++;
    }
    for(int i:c)
    {
        if(i==0){
            return false;
        }
    }
    return true;
}

int main() {
    string str;
    getline(cin,str);

    if(checkPangram(str)){
        cout<<"true\n";
    }
    else{
        cout<<"false\n";
    }
    return 0;

}