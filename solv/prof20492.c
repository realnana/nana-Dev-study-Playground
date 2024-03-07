
void out(char *fName) {
    FILE *out;

    out = fopen(fName, "wt");
    fprintf(out, "%d %d\n",  R1, R2);
    fclose(out);
}

void solve() {

}