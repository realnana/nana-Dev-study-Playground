// 이 문제는 직원들의 출근 시간과 퇴근 시간을 기반으로 각 직원의 총 근무 시간을 계산하는 것


#include <stdio.h>

int main() {
    for(int i=0; i<3; i++) {
        int h,m,s,hh,mm,ss;
        scanf("%d %d %d %d %d %d", &h, &m, &s, &hh, &mm, &ss);
        s = ss-s;
        m = mm-m;
        h = hh-h;

        if(s<0) {
            s = 60+s;
            m = m-1;
        }
        if (m<0) {
            m = 60+m;
            h = h-1;
        }
        if(h<0) {
            h = 24-h;
        }
        printf("%d %d %d", h, m, s);
    }
}
