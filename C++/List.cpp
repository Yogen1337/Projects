#include <iostream>

struct Node
{
	float data;
	Node* next;
};

/*
PushFront
	Insert items to front of list
*/
void PushFront(Node** head, float data)
{
	//Create the new node
	Node* newNode = new Node;
	newNode->data = data;
	//Check if the given head node is NULL
	if(*head == NULL)
	{
		//Store the new node into head node
		(*head) = newNode;
		//Set the next node to NULL
		(*head)->next = NULL;
	}
	else
	{
		//Set the next node to point to the head node for linkage
		newNode->next = *head;
		//Set the head node to point to the new node
		*head = newNode;
	}
}

void PushBack(Node** head, float data)
{
	//Create the new node
	Node* newNode = new Node;
	newNode->data = data;
	//Check if the given head node is NULL
	if(*head == NULL)
	{
		//Store the new node into head node
		(*head) = newNode;
		//Set the next node to NULL
		(*head)->next = NULL;
	}
	else
	{
		//Store copy of head node
		Node* iter = *head;
		//Iterate over list until we reach the end
		while(iter->next != NULL)
		{
			iter = iter->next;
		}
		//Set the new node's next node equal to the current nodes next
		newNode->next = iter->next;
		//Set the next node to the new node
		iter->next = newNode;
	}
}
/*
Delete
	Removes element from back of list
*/
void Delete(Node** head, int index)
{
	Node* iter = *head;
	int indexIter = 0;
	//Check if the head node is valid
	if(*head == NULL)
	{
		return;
	}
	//If we're deleting the first element
	else if(indexIter == index)
	{
		//Store the next node - directly from the head node
		Node* holdNode = (*head)->next;
		//Delete the head 
		delete *head;
		//Reset the head node to the hold node
		*head = holdNode;
		//Leave function
		return;
	}
	else
	{
		while(iter != NULL)
		{
			//Check if the next index is equal to the desire deletion index
			if(indexIter+1 == index)
			{
				//Check if next node is valid
				if(iter->next)
				{
					//Store the next node's next node
					Node* holdNode = iter->next->next;
					//Delete the next node
					delete iter->next;
					//Reset the next node to the stored node
					iter->next = holdNode;
					//leave function
					return;
				}
				else
				{
					//leave loop
					break;
				}
			}
			//Increment iterator
			iter = iter->next;
			//Increment current index
			++indexIter;
		}
		//If this area reached throw invalid index error
		std::cout<<"Invalid Index..\n";
	}
}

void Print(Node* head)
{
	Node* iter = head;
	int index = 0;
	while(iter != NULL)
	{
		std::cout<<"Node "<< index << ": " << iter->data << "\n";
		iter = iter->next;
		++index;
	}
	std::cout<<"======================================\n";
}


int main()
{
	Node* nodeList = NULL;
	
	PushFront(&nodeList,10.0f);
	PushFront(&nodeList,20.0f);
	PushFront(&nodeList,30.0f);

	Print(nodeList);
	
	Delete(&nodeList,1);
	Delete(&nodeList,0);
	Delete(&nodeList,12);

	Print(nodeList);

	PushBack(&nodeList,1.0f);
	PushBack(&nodeList,29.0f);
	PushBack(&nodeList,30.0f);

	Print(nodeList);

	return 0;
}