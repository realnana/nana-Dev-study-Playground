#include <stdio.h>
#includ

int main(void) {

    FILE * fp = fopen("20492.txt", "w");

    if(fp == NULL) {
        printf("파일열기실패\n");
    } else {
        printf("")
    }

    fclose(fp);

    char ch;
    int a,b,n;

    if (fp == NULL) {
        scanf("%d", &n);
        a = n * 0.78;
        b = n - (n * 0.2 * 0.22);
        printf("%d %d", a, b);
    }

    while(1) {

    }
    return 0;
}

//#include <stdio.h>
//
//int main(void)
//{
//    FILE * fp = fopen("sejong.txt", "w");
//
//    char ch;
//
//    if (fp == NULL)
//    {
//        printf("파일 열기 실패\n");
//        return 1;
//    }
//
//    printf("데이터를 입력하세요.\n");
//
//    while (1)
//    {
//        ch = getchar();    // 키보드 입력
//        if (ch == EOF)
//            break;
//        fputc(ch, fp);    // 파일 출력
//    }
//
//    fclose(fp);
//
//    return 0;
//}