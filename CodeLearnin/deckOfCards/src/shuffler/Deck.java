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

    // Using Streams :)
     final List<String> deckComplete = deckSuit.stream().flatMap((suit) -> deckNumbers.stream().map(
     (number) -> number + suit)).collect(Collectors.toList());

    // Implement Shuffle some other way...
    // Collections.shuffle(deckComplete);
    
    while (shuffler.size() != 52) {
    	int randomizer = rand.nextInt((52 - 1) + 1);
    	System.out.println(randomizer);
    	if (shuffler.indexOf(randomizer) == -1) {
    		shuffler.add(randomizer);
    	}
    }

      final List<String> shuffledDeck = shuffler.stream((card) -> deckComplete.get(card)).collect(Collectors.toList());

    return shuffledDeck;
  }
}
