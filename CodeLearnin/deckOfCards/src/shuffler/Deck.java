package shuffler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Deck
{
  public List getDeck()
  {
	Random rand = new Random();
	
	  List<Integer> shuffler = new ArrayList<Integer>();
    List<String> deckNumbers =
        new ArrayList<String>(Arrays.asList("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "Jack", "Queen", "King"));
    List<String> deckSuit =
        new ArrayList<String>(
            Arrays.asList(" of Hearts", " of Diamonds", " of Spades", " of Clubs"));

    // int suitCounter = deckSuit.size();
    // int deckCount = deckNumbers.size();
    // for (int i = 0; i < suitCounter; i++)
    // {
    // for (int j = 0; j < deckCount; j++)
    // {
    // deckComplete.add(deckNumbers.get(j) + deckSuit.get(i));
    // }
    // }

    // Using Streams :)
    final List<Object> deckComplete = deckSuit.stream().flatMap((suit) -> deckNumbers.stream().map(
        (number) -> number + suit)).collect(Collectors.toList());

    // Implement Shuffle some other way...
    // Collections.shuffle(deckComplete);
    
    while (shuffler.size() != 51) {
    	int randomizer = rand.nextInt((52 - 1) + 1);
    	System.out.println(randomizer);
    	if (shuffler.indexOf(randomizer) == -1) {
    		shuffler.add(randomizer);
    	}
    }
    
    final List<String> deckShuffled = (List<Object>) deckComplete.stream().flatMap((x) -> deckComplete.get(shuffler.get(x)).collect(Collectors.toList()));

    return deckComplete;
  }
}
