/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
[14/02, 14:53] Abhishek Mandal (SVIET.C): #include <iostream>
#include <string>
using namespace std;

string reverseString(const string &str) {
    string reversed = "";
    for (int i = str.length() - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

int main() {
    string input;
    cout << "Enter a string: ";
    getline(cin, input);

    string reversed = reverseString(input);
    cout << "Reversed string: " << reversed << endl;

    return 0;
}
[14/02, 14:53] Abhishek Mandal (SVIET.C): #include <iostream>
using namespace std;

void printPyramid(int rows) {
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

int main() {
    int rows;
    cout << "Enter the number of rows: ";
    cin >> rows;

    printPyramid(rows);

    return 0;
}