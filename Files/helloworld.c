#include <stdio.h>

int main(int argc, char const *argv[]){
    /* code */
    FILE *fp;
    char c = 'a';

    fp = fopen(argv[1], "rw");

    if (fp == NULL)
        return 0;

    while((c = getc(fp)) != EOF){
        printf("%c", c);
    }

    printf("\n");
    return 1;
}