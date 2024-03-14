cmake_minimum_required(VERSION 3.26)
project(Adv_C)

set(CMAKE_CXX_STANDARD 14)

include_directories(BOJ/CPP)

add_executable(Adv_C
        BOJ/Clang/src/2845.c
        BOJ/CPP/sol20492.cpp
        BOJ/CPP/sol20492.h)
