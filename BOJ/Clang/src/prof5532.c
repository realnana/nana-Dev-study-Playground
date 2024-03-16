void solve() {
    int sSeconds, eSeconds;
    for(int i=0; i<3; i++) {
        sSeconds  = sHour[i]*3600 + sMin[i]*60 + sSec[i];
        eSeconds = eHour[i]*3600 + eMin[i]*60 + eSec[i];
        diffSeconds = eSeconds - sSeconds;
        wHour[i] = diffSeconds/3600;
        diffSeconds = diffSeconds%3600;
        wMin[i] = diffSeconds/60;
        wSec[i] = diffSeconds%60;
    }
}