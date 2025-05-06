#include<iostream>
#include<fstream>
using namespace std;

struct ELev{

    string nume[2];
    string prenume[2];
    char clasa[2];
    string adresa[2];
    string parinti[4];
};
struct adresa{
    int oras[2];
    int strada[2];
    int numarstrada[2];
    int numarbloc[2];
    int numarapartament[2];

};
struct parinti{
    string numtata[2];
    string prenumemama[2];
};

vector<ELev> elevi;



}