#include<iostream>
#include <algorithm>
#include <random>
#include <vector>
using namespace std;

void shuffleArray(int n,int a[]){
    random_device rd;
    mt19937 g(rd());

    for (int i = n - 1; i > 0; i--) {
        uniform_int_distribution<int> distribution(0, i);
        int j = distribution(g);
        swap(a[i], a[j]);
    }

}
int main(){
    int n;
    cin>>n;
    int a[n];

    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    shuffleArray(n,a);

    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }

    return 0;
}