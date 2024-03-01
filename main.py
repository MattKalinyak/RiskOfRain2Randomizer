#library:
import random
import time

usualPlayers = ["Jack", "Nick", "Matt", "Greg"]
survivorList = ["Commando", "Huntress", "MUL-T", "Engineer", "Artificer", "Mercenary", "REX", "Loader","Acrid","Captain","Bandit", "Railgunner", "Void Fiend", "Heretic"]

#allocate empty array of four NULL elements
randPick = [None] * 4
reRolled = [0] * 4

#assign a survivor to each Player's array element, then print the results.
for i in range(len(usualPlayers)):  #len() method returns integer representing array length
    if(random.randint(1,100) <= 5):  # 5 percent change of anyone playing Heretic
        randPick[i] = survivorList[13]
    else:
        randPick[i] = survivorList[random.randint(0,12)]
    
    print(usualPlayers[i] + ": " + randPick[i])

print()
choice = input("Would you like to re-roll anyone? (y/n) ")
choice = choice.lower()                 #turn user input to lower

while (choice == 'y' or choice == 'yes'):
    playerRoll = input("Which player would you like to re-roll? (enter a name) ")
    print()
#step through array and find the player, if it exists, and re-roll if found.
    for i in range(len(usualPlayers)):

        if(playerRoll.lower() == usualPlayers[i].lower() and reRolled[i] == 0):
            if(random.randint(1,100) <= 5):  # 5 percent change of anyone playing Heretic
                randPick[i] = survivorList[13]
            else:
                randPick[i] = survivorList[random.randint(0,12)]
            
            reRolled[i] = 1

        #reprint the results.
        if(reRolled[i] == 0):
            print(usualPlayers[i] + ": " + randPick[i])
        else:
            print(usualPlayers[i] + ": " + randPick[i] + " [R]")

    print()
    choice = input("Would you like to Re-roll anyone else? (y/n) ")
    choice = choice.lower()

print("\nEnjoy the Game!\n")

time.sleep(3)
