// 파일 입출력 템플릿

#include <stdio.h>

int main() {

    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    // 코드 내용

    fclose(stdin);
    fclose(stdout);

    return 0;
}