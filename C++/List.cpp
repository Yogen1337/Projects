#include <iostream>

template<class T>
struct Node
{
	T data;
	Node<T>* next;
};

/*
PushFront
	Insert items to front of list
*/
template<class T>
void PushFront(Node<T>** head, T data)
{
	//Create the new node
	Node<T>* newNode = new Node<T>;
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

template<class T>
void PushBack(Node<T>** head, T data)
{
	//Create the new node
	Node<T>* newNode = new Node<T>;
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
		Node<T>* iter = *head;
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
template<class T>
void Delete(Node<T>** head, int index)
{
	Node<T>* iter = *head;
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
		Node<T>* holdNode = (*head)->next;
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
					Node<T>* holdNode = iter->next->next;
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
template<class T>
void Print(Node<T>* head)
{
	Node<T>* iter = head;
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
	Node<float>* nodeList = NULL;
	
	PushFront<float>(&nodeList,10.5f);
	PushFront<float>(&nodeList,20.3f);
	PushFront<float>(&nodeList,30.0f);

	Print<float>(nodeList);
	
	Delete<float>(&nodeList,1);
	Delete<float>(&nodeList,0);
	Delete<float>(&nodeList,12);

	Print<float>(nodeList);

	PushBack<float>(&nodeList,1.5f);
	PushBack<float>(&nodeList,29.4f);
	PushBack<float>(&nodeList,30.6f);

	Print<float>(nodeList);

	return 0;
}