#include <iostream>
using namespace std;

// linked list

// khởi tạo dslkd
struct node {
	int data;
	node* next;
};
typedef struct node NODE; // đổi từ node thành NODE

struct list {
	NODE *first;
	NODE *last;
};
typedef struct list LIST;

void initList(LIST& list) { // khởi tạo danh sách -> ds đang rỗng
	list.first = NULL;
	list.last = NULL;
}

// cần tạo 1 ham để tạo ra 1 node mới 
// tạo ra 1 node mới ko liên quan đên list
NODE* makeNode(int x) {
	NODE* p = new NODE; // khởi tạo 1 node cần thêm
	// sau đó set giá trị cho node mới
	p->next = NULL;
	p->data = x;
	return p;
}


// thêm node vào đầu danh sách
void addFirst(LIST& list, NODE* p) { // cần cho biết list nào cần thêm và node nào được thêm
	if (list.first == NULL) { // nếu mà thằng node đầu của list mà rỗng => node đầu = node cuối = rỗng
		list.first = list.last = p; // => thk đầu cx là thk cuối và cx là thk thêm p
	}
	else {
		p->next = list.first; // thk node cần thêm trỏ đến next sẽ bằng thk first hiện tại
		list.first = p; // cập nhật lại first là thk p thêm vô
	}
}

// thêm node vào cuối danh sách
void addLast(LIST& list, NODE* p) {
	if (list.first == NULL) {
		list.first = list.last = p;
	}
	else {
		list.last->next = p; // last của list trỏ đến next sẽ bằng thk cần thêm
		list.last = p; // cập nhật lại last là thk p thêm vô
	}
}


void deleteFirst(LIST& list) { //cần cho biết list nào cần xóa phần tử đầu và tự tìm node để xóa
	// nó sẽ tự tìm ptu đầu của list và xóa
	if (list.first == NULL && list.last == NULL) {
		cout << "danh sach rong";
		return; // dừng chương
	}
	else {
		NODE* p = list.first; // tạo 1 bản copy thk first // firrst quá khứ 
		list.first = list.first->next; // thay đổi giá trị first thành thk first tiếp theo // giá trị đã di chuyển sang rồi
		delete p; // xóa thk copy => xóa thk đầu
	}
}


void deleteLast(LIST& list) {
	if (list.first == NULL && list.last == NULL) {
		cout << "danh sach rong";
		return; // dừng chương
	}
	if (list.first == list.last) {
		deleteFirst(list);
	}

	else {
		for (NODE* p = list.first; p != NULL; p = p->next) { // vì p->next là cuối =>> p là cận cuối
			if (p->next == list.last) { // kiểm tra đến thk cận cuối
				delete list.last; // xóa luôn thk last
				list.last = p; // cập nhật lại last sẽ bằng p cận cuối
				p->next = NULL;// và p cận cuối trỏ đến next là NULL
			}
		}
	}
}


// in danh sách
void printfList(LIST list) {
	// quét từ đầu list đến cuối list
	for (NODE* p = list.first; p != NULL; p = p->next) {
		cout << p->data << " ";
	}
}


bool searchData(LIST l,int x) {
	for (NODE* p = l.first; p != NULL; p = p->next) {
		if (p->data == x) 
			return true;
	}
	return false;
}

// lifo - fifo ->>> vào sau cùng thì ra trước tiên --- vào đầu tiên thì ra đầu tiên

int main() {
	LIST l; // khai báo biến
	initList(l); // gán l vừa khởi tạo khi mà trỏ đến F,L = null, bắt đầu khởi tạo list

	int chon, pt, max;

	do {
		system("cls");
		cout << "1.Tao danh sach" << endl;
		cout << "2.Them gia tri vao dau danh sach" << endl;
		cout << "3.Them gia tri vao cuoi danh sach" << endl;
		cout << "4.Xoa dau" << endl;
		cout << "5.Xoa cuoi" << endl;
		cout << "6.In danh sach" << endl;
		cout << "7.Tim kiem" << endl;
		cout << "8.Thoat!" << endl;
		cin >> chon;
		switch (chon)
		{
		case 1:
			cout << "Nhap so luong phan tu can tao"; cin >> max;
			for (int i = 1; i <= max; i++) {
				cout << "Nhap gia tri thu" << i << ":"; 
				cin >> pt;
				addLast(l, makeNode(pt));// lifo
			}
			break;
		case 2: 
			cout << "Nhap so can them";
			cin >> pt;
			addFirst(l, makeNode(pt));
			break;
		case 3:
			cout << "Nhap so can them "; 
			cin >> pt;
			addLast(l, makeNode(pt));
			break;

		case 4:
			deleteFirst(l);
			break;
		case 5:
			deleteLast(l);
			break;
		case 6:
			printfList(l);
			system("pause");
			break;
		case 7:
			cout << "Nhap gia tri can tim";
			cin >> pt;
			if (!searchData(l, pt)) {

				cout << "ko on";
			}
			else {
				cout << "tim thay";
			}
			system("pause");
			break;
		case 8:
			cout << "Bye";
			return 0;
		}
	} while (true);

	return 0;
}