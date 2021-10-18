"""
This was made to see if and how this would be done in a language that I am more farmilliar with
"""
import random

def makesmash(letters, length):
    smash = ''

    for i in range(int(length)):
        smash += (letters[random.randint(0,len(letters)-1)])
    
    return (smash)

letters2use = input ("Charecters to use: ")
length = input ("KeySmash length: ")

print(makesmash(letters2use, length))