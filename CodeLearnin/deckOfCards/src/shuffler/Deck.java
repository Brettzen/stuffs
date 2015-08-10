package shuffler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Deck {
	public List getDeck() {
		List<String> deckComplete = new ArrayList<String>();
		List<String> deckNumbers = new ArrayList<String>(Arrays.asList( "Ace","2","3","4","5","6","7","8","9","10", "Jack", "Queen", "King"));
		List<String> deckSuit = new ArrayList<String>(Arrays.asList(" of Hearts", " of Diamonds", " of Spades", " of Clubs"));
		
		int suitCounter = deckSuit.size();
		int deckCount = deckNumbers.size();
		for (int i = 0; i < suitCounter; i++) {
			for (int j = 0; j < deckCount; j++) {
				deckComplete.add(deckNumbers.get(j) + deckSuit.get(i));
			}
		}
		
		Collections.shuffle(deckComplete);
		
		return deckComplete;
	}
}
