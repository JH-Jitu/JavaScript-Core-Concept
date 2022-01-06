#include <iostream>
using namespace std;

void something(int *arrParam)
{

    arrParam[3] = 8;
}

int main()
{
    int arrSize = 5;
    int arr[arrSize] = {5, 6, 7};
    something(arr);

    cout << "[ ";
    for (int i = 0; i < arrSize; i++)
    {
        cout << "" << arr[i] << " ";
    }
    cout << "]";
}